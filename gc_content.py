from Bio import SeqIO
from Bio.Seq import Seq
from Bio.Alphabet import generic_dna
from Bio.SeqUtils import GC
from Bio.SeqIO.FastaIO import FastaIterator
import csv, re

# fasta_filename = "/Users/Megatron/Documents/Bioinformatics/poplar-primers_short.fa"
# fasta_filename = "/Users/Megatron/Documents/Bioinformatics/poplar-primers.fa"

fasta_filename = raw_input("Enter the name of a fasta file. Please include "
                           "path if file is outside current directory: ")
gc_output = "GCoutput_" + fasta_filename.rsplit( ".", 1 )[ 0 ] + ".csv"


'''
# Load fasta file (.fasta or .fa formated file) with a single sequence
with open("/Users/Megatron/Documents/Bioinformatics/BRCA1_test.fasta") as f:
# with open("/Users/Megatron/Documents/Bioinformatics/poplar-primers_short.fa") as f:
    f.readline() # skip the first line of metadata
    my_seq = f.read()
    str_seq = Seq(my_seq, generic_dna)

    print('my_seq is ', my_seq)
    # In Python3, Seq(my_seq, generic_dna) prints the same f.read. but in Python2.7 prints ('str_seq is ', Seq('GGACAGCTTATGCAGACCGGGAATGACGTGGGAGTCACATCTGTTAACCCT', DNAAlphabet()))
    print('str_seq is ', str_seq)  #
    print ('The sequence %s is %i bases long' % (my_seq, len(my_seq)))
    print ('reverse complement is %s' % str_seq.reverse_complement())
    print ('protein translation is %s' % str_seq.translate())
'''


fasta_sequences = SeqIO.parse(open(fasta_filename),'fasta')

with open(gc_output, "wb") as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',')
    for fasta in fasta_sequences:
        # name = fasta.id   # Just the first word in the description
        # Replace whitespace between words in sequence description with underscore
        full_description = re.sub("\s+", "_", fasta.description)
        print(full_description)
        sequence = str(fasta.seq)
        print(sequence)
        gc_content = "%.2f" % GC(sequence) # limit gc percentage to 2 decimal places
        print(gc_content)
        filewriter.writerow([full_description, gc_content])

fasta_sequences.close()
