import urllib.request, re, ssl
ctx = ssl.create_default_context(); ctx.check_hostname = False; ctx.verify_mode = ssl.CERT_NONE
urls = ['https://ibb.co/vx2SwyLV', 'https://ibb.co/hJTvKs26', 'https://ibb.co/sZzNgQ5', 'https://ibb.co/Y44L5FH0']
with open('urls.txt', 'w') as f:
    for u in urls:
        html = urllib.request.urlopen(u, context=ctx).read().decode('utf-8')
        links = re.findall(r'<meta property=\"og:image\" content=\"(.*?)\"', html)
        if links: f.write(links[0] + '\n')
