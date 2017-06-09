"""
Write a function that when given a URL as a string, parses out just
the domain name and returns it as a string. For example:

domain_name("http://github.com/carbonfive/raygun") == "github"
domain_name("http://www.zombie-bites.com") == "zombie-bites"
domain_name("https://www.cnet.com") == "cnet"
"""

from re import compile, match

REGEX = compile(r'(http[s]*://)?(www.)?(?P<domain>[\w-]+)\.')

def domain_name(url):
    return match(REGEX, url).group('domain')


### This only works for "http://www.zombie-bites.com" and "https://www.cnet.com"
# import re
#
# def domain_name(url):
#     searcher = re.search("(?<=\//www.)[^\.]*(?=\.)", url)
#     if searcher:
#         return str(searcher.group())
#     else:
#         return ("No Match")


print domain_name("http://github.com/carbonfive/raygun")
print domain_name("http://www.zombie-bites.com")
print domain_name("https://www.cnet.com")
