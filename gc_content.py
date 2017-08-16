from Bio import SeqIO
from Bio.Seq import Seq
from Bio.Alphabet import generic_dna
from Bio.SeqUtils import GC
from Bio.SeqIO.FastaIO import FastaIterator
import csv

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


# Make a function for writing outputs to a csv file
def csv_writer(data, path):
    # Write data to a CSV file path
    with open(path, "wb") as csv_file:
        writer = csv.writer(csv_file, delimiter=',')
        for line in data:
            writer.writerow(line)

def gc_content(sequence):
    return GC(sequence)

fasta_sequences = SeqIO.parse(open("/Users/Megatron/Documents/Bioinformatics/poplar-primers_short.fa"),'fasta')
with open("/Users/Megatron/Documents/Bioinformatics/output_poplar-primers_short.fa", "wb") as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',')
    for fasta in fasta_sequences:
        name = fasta.id
        sequence = str(fasta.seq)
