#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
修改项目文件的工具类
"""
import util


index_directory = './index.html'

util.replace_string(
    index_directory,
    "portrait",
    "landescape"
)

util.replace_string(
    index_directory,
    "exactFit",
    "showAll"
)

util.replace_line(
    index_directory,
    "background: #888888;",
    "background: #ffffff;"
)
