# Taejoon Kim
# SoftDev pd9
# K<09> -- Yummy Mongo Py
# <2020>-<02>-<27>

import json
# import the complete PyMongo library and check its version
import pymongo
# import the MongoClient class
from pymongo import MongoClient

# build a new client instance for MongoDB passing
# the string domain and integer port to the host parameters
mongo_client = MongoClient('localhost', 27017)
host_info = mongo_client['HOST']

f = open("primer-dataset.json", r)
