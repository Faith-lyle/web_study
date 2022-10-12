#!/usr/bin/python3
# -- coding: utf-8 --
# @Author : Long.Hou
# @Email : Long2.Hou@luxshare-ict.com
# @File : utils.py
# @Project : web_demo
# @Time : 2022/10/11 08:26
# -------------------------------
import random


def determine_pwd(username, pwd):
    if username == "admin" and pwd == 'admin':
        return True
    else:
        return False


def get_cap_summary():
    data = {"yield": [], 'qty': []}
    for i in range(7):
        data["yield"].append(random.uniform(90.0,96.8))
        data["qty"].append(random.randint(a=1, b=20))
    return data


if __name__ == '__main__':
    c = [25, 92, 180]
    for i in c:
        print(hex(i))
