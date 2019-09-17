import csv
import random

occupations = {}

def turnIntoDict(file):
    with open(file, 'r') as csvfile:
        readCSV = csv.reader(csvfile)
        next(readCSV) #skip the first row cuz it's unnecessary
        for row in readCSV:
            occupations[row[0]] = row[1] #turn csv into a dictionary


def occupationPicker(dic):
    t = 0.0
    x = random.random() * 99.8 #generating a random number between 0 and 99.8
    for key in list(dic):
        #print(dic[key])
        t += float(dic[key])
        if x < t:
            return key

turnIntoDict("occupations.csv")
#print(occupations)
occupations.pop('Total')
print(occupationPicker(occupations))
