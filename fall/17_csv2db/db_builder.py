#Taejoon Kim
#SoftDev pd9
#skeleton :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >


command = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id"

c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
