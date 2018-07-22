#!/usr/bin/env python -u
# -*- coding: utf-8 -*-
"""
修改项目文件的工具类
"""
import os
import string
import random


def insert_next_line(file_name, base_line, insert_line):
    """
    添加 字符串 到 指定字符串 的 下一行
    被添加的字符串 和 指定字符串 呈一一对应的关系

    :param file_name: 需要添加的文件
    :param base_line: 指定字符串
    :param insert_line: 添加的字符串
    """
    if not os.path.exists(file_name):
        print u' %s not exist!' % file_name
        return

    with open(file_name, 'r') as f:
        lines = f.readlines()

    with open(file_name, 'w') as f:
        for line in lines:

            f.write(line)
            if base_line.decode('utf-8') in line.decode('utf-8'):
                # 当找到指定字符串时, 添加一行
                f.write(insert_line.encode('utf-8') + '\n')


def insert_previous_line(file_name, base_line, insert_line):
    """
    添加 字符串 到 指定字符串 的 上一行
    被添加的字符串 和 指定字符串 呈一一对应的关系

    :param file_name: 需要添加的文件
    :param base_line: 指定字符串
    :param insert_line: 添加的字符串
    """
    if not os.path.exists(file_name):
        print u' %s not exist!' % file_name
        return

    with open(file_name, 'r') as f:
        lines = f.readlines()

    with open(file_name, 'w') as f:
        for line in lines:

            if base_line.decode('utf-8') in line.decode('utf-8'):
                # 当找到指定字符串时, 添加一行
                f.write(insert_line.encode('utf-8') + '\n')

            f.write(line)


def replace_string(file_name, base_string, replace_string):
    """
    替换 字符串
    :param file_name: 需要替换的文件
    :param base_string: 被替换的目标
    :param replace_string: 用于替换的内容
    """
    if not os.path.exists(file_name):
        print u' %s not exist!' % file_name
        return

    with open(file_name, 'r') as f:
        lines = f.readlines()

    with open(file_name, 'w') as f:
        for line in lines:

            if base_string.decode('utf-8') in line.decode('utf-8'):
                # 当找到指定字符串时, 替换字符串
                f.write(line.replace(base_string, replace_string).encode('utf-8'))
            else:
                f.write(line)


def replace_line(file_name, base_line, replace_line):
    """
    替换 字符串
    :param file_name: 需要替换的文件
    :param base_line: 被替换的目标
    :param replace_line: 用于替换的行
    """
    if not os.path.exists(file_name):
        print u' %s not exist!' % file_name
        return

    with open(file_name, 'r') as f:
        lines = f.readlines()

    with open(file_name, 'w') as f:
        for line in lines:

            if base_line.decode('utf-8') in line.decode('utf-8'):
                # 当找到指定字符串所在行时, 写入替换行
                f.write(replace_line.encode('utf-8'))
            else:
                f.write(line)


def replace_next_line(file_name, base_line, replace_next_line):
    """
    替换 指定字符串 的 下一行
    :param file_name: 需要替换的文件
    :param base_line: 指定行
    :param replace_next_line: 替换的内容
    """

    if not os.path.exists(file_name):
        print u' %s not exist!' % file_name
        return

    with open(file_name, 'r') as f:
        lines = f.readlines()

    with open(file_name, 'w') as f:
        is_base_line_found = False

        for line in lines:

            if is_base_line_found:
                # 当发现 base line 被找到的时(这个时候已经是下一行了)
                # 那么跳过该行的输出, 同时输出替换的内容
                f.write(replace_next_line.encode('utf-8') + '\n')

                # 改回 未找到的状态 以便输出剩余部分
                is_base_line_found = False

                # 返回 for 循环开始
                continue

            if base_line.decode('utf-8') in line.decode('utf-8'):
                # 标记已找到指定行, 以便跳过循环到下一行的输出
                is_base_line_found = True

            f.write(line)


def delete_line(file_name, delete_line):
    """
    删除字符串所在行

    :param file_name: 需要修改的文件
    :param delete_line: 需要删除的字符串
    """
    if not os.path.exists(file_name):
        print u' %s not exist!' % file_name
        return

    with open(file_name, 'r') as f:
        lines = f.readlines()

    with open(file_name, 'w') as f:
        for line in lines:

            if delete_line in line:
                # 跳过需要删除的这一行
                continue

            f.write(line)


def id_generator(size=20, chars=string.ascii_letters):
    """
    获取到随机的字符串, 用于代码混淆
    """
    return ''.join(random.choice(chars) for _ in range(size))


def get_dir_list(code_path, file_extension_filter):
    """
    获取到当前文件夹递归的文件路径, 用于混淆时进行更改
    """
    return dir_list(code_path, file_extension_filter, [])


def dir_list(process_path, file_extension_filter, dir_collection):
    """
    递归获取到 需要修改的 文件路径
    :param file_extension_filter: 过滤需要更改的文件类型
    :param process_path: 工作路径
    :param dir_collection: 当前收集到的文件路径
    :return: 所有的文件路径
    """
    file_list = os.listdir(process_path)

    for filename in file_list:
        file_path = os.path.join(process_path, filename)

        # 如果路径不是文件夹就保存, 否则继续递归
        if os.path.isdir(file_path):
            dir_list(file_path, file_extension_filter, dir_collection)
        else:
            # 获取到文件后缀, 保证只有指定后缀文件被更改
            file_name = file_path.split("/")[-1]
            file_extension = file_name.split('.')[-1]

            if file_extension in file_extension_filter:
                dir_collection.append(file_path)

    return dir_collection


index_directory = './index.html'

insert_next_line(
    index_directory,
    "-ms-touch-action: none;",
    "background-size: 100% 100%;"
)

insert_next_line(
    index_directory,
    "-ms-touch-action: none;",
    "background-image: url(\"./launch.jpg\");"
)

delete_line(
    index_directory,
    "background: #888888;"
)