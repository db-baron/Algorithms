
### READ ME ###
# gc_content.py is designed to run on Python3.5 and requires the installation
# of the Bio, SeqUtils, csv, and re packages. Find instructions for downloading packages
# here https://packaging.python.org/tutorials/installing-packages/
###

from Bio import SeqIO
from Bio.SeqUtils import GC
import os, csv, re

# User instructions
fasta_input = input("Enter the name of a .fa or .fasta format file. Include path"
                           "if file is outside current directory. The gc_content.py"
                           "program will generate a .csv file listing the percent"
                           "gc content next to each sequence listed in the file. \n"
                           "File name:")

# Strip file name from path
fasta_filename = os.path.basename(fasta_input)
# Create new filename for writing output to
gc_output = "GCoutput_" + fasta_filename.rsplit( ".", 1 )[ 0 ] + ".csv" # the ( ".", 1 ) means we're splitting on the "." and want an array with a max index of 1 as the result

# Open and parse .fasta or .fa file
fasta_sequences = SeqIO.parse(open(fasta_input, 'r'),'fasta')

# Open csv output file for writing
with open(gc_output, 'w') as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',')
    filewriter.writerow(["Name", "Percent GC Content"])
    for fasta in fasta_sequences:
        # Get sequence description. Note: this assumes that the user desires all information available in the line
        full_description = re.sub("\s+", "_", fasta.description) # Replace whitespace between words in sequence description with an underscore
        sequence = str(fasta.seq)
        gc_content = "%.2f" % GC(sequence) # Limit gc percentage to 2 decimal places
        filewriter.writerow([full_description, gc_content])

fasta_sequences.close()
