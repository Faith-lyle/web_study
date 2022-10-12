#!/usr/bin/python3
# -- coding: utf-8 --
# @Author : Long.Hou
# @Email : Long2.Hou@luxshare-ict.com
# @File : utils.py
# @Project : web_demo
# @Time : 2022/10/11 08:26
# -------------------------------


def determine_pwd(username,pwd):
    if username == "admin" and pwd == 'admin':
        return True
    else:
        return False

if __name__ == '__main__':
    c = [25,92,180]
    for i in c:
        print(hex(i))
