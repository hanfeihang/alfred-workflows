# -*- coding:utf-8 -*-
import requests
import socket
import sys
import json


def getMyOuterIp():
    outerIp = requests.get('http://ipinfo.io/ip', timeout=1).text.strip()
    return outerIp


def getMyLocalIp():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(('8.8.8.8', 80))
    localIp = s.getsockname()[0]
    s.close()
    return localIp


if __name__ == '__main__':
    # query = sys.argv[1]
    localIp = getMyLocalIp()

    ips = []
    result = {'items': ips}
    ips.append({
        'title': localIp,
        'subtitle': u'局域网ip',
        'arg': localIp,
    })

    outerIp = getMyOuterIp()
    ips.append({
        'title': outerIp,
        'subtitle': u'公网ip',
        'arg': outerIp,
    })

    sys.stdout.write(json.dumps(result))
    sys.exit()
