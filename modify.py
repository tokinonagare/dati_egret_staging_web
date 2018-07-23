#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
修改项目文件的工具类
"""
import util


index_directory = './index.html'

util.insert_next_line(
    index_directory,
    "-ms-touch-action: none;",
    "background-image: url(\"./launch.jpg\");"
)

util.insert_next_line(
    index_directory,
    "-ms-touch-action: none;",
    "background-size: 100% 100%;"
)

util.delete_line(
    index_directory,
    "background: #888888;"
)
