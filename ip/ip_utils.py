# -*- coding:utf-8 -*-
import requests
import socket
import sys
import json
import re


def get_my_outer_ip():
    response = requests.get(u'http://ip-api.com/json/?lang=zh-CN').json()
    return response[u'query']


def get_my_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect((u'8.8.8.8', 80))
    socket_name = s.getsockname()[0]
    s.close()
    return socket_name


def check_ip(ip):
    p = re.compile('^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$')
    if p.match(ip):
        return True
    else:
        return False


if __name__ == '__main__':
    # 返回列表
    ipItems = []

    local_ip = get_my_local_ip()
    ipItems.append({
        'title': local_ip,
        'subtitle': u'局域网ip',
        'arg': local_ip,
    })

    outer_ip = get_my_outer_ip()
    ipItems.append({
        'title': outer_ip,
        'subtitle': u'公网ip',
        'arg': outer_ip,
    })

    if len(sys.argv) > 1 and sys.argv[1] is not None:
        queryIp = sys.argv[1]
        if check_ip(queryIp):
            url = u'http://ip-api.com/json/{}?lang=zh-CN'.format(queryIp)
            ansJSON = requests.get(url).json()
            ipItems.append({
                'title': queryIp,
                'subtitle': u'{}{}'.format(ansJSON['country'], ansJSON['regionName']),
                'arg': queryIp,
            })

    # 构建返回结构体
    result = {'items': ipItems}
    sys.stdout.write(json.dumps(result))
    sys.exit()
