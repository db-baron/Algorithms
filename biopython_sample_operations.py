from Bio.Seq import Seq
import khmer

#create a sequence object
# my_seq = Seq('CATGTAGACTAG')
#or open a fasta file
with open("/Users/Megatron/Documents/Bioinformatics/BRCA1_test.fasta") as f:
    f.readline() # skip the first line of metadata
    my_seq = f.read()
    str_seq = Seq(my_seq)
#print out some details about it
print 'seq %s is %i bases long' % (my_seq, len(my_seq))
print 'reverse complement is %s' % str_seq.reverse_complement()
print 'protein translation is %s' % str_seq.translate()

# Identify most commone 3-mer in sequence
my_seq = 'CGCCTAAATAGCCTCGCGGAGCCTTATGTCATACTCGTCCT'
for i in range(len(my_seq)-1):
    pass

# Count number of times Pattern occurs in seq
def PatternCount(seq, Pattern):
    count = 0
    print("VVV", seq[0:0+len(Pattern)+1])
    for i in range(len(seq) - len(Pattern)):
        if (seq[i:i+len(Pattern)] == Pattern):
            count += 1
    return count

with open("/Users/Megatron/Documents/Bioinformatics/dataset_2_7.txt") as f:
    books_seq = f.read()
print PatternCount(books_seq, "GCG")

# When parsing a fasta file with multiple sequences
from Bio.SeqIO.FastaIO import FastaIterator
def mult_fasta_reader(filename):
    with open(filename) as handle:
        for record in FastaIterator(handle):
            # return record
            yield record

print mult_fasta_reader("/Users/Megatron/Downloads/BRCA1_test.fasta_multsequences.fasta")


# Caluclate the longest k-mer of length k in sequence seq
# https://media.readthedocs.org/pdf/khmer/v2.1/khmer.pdf
ksize = 3 # k-mer size to use

# Create a new ktable of size 4^(k-1)+k bytes, suitable for counting k-mers.
cg = khmer.Countgraph(ksize, 4**ksize, 1)

# load all k-mers from the given string (returns the number of k-mers processed)
# cg.consume('CGCCTAAATAGCCTCGCGGAGCCTTATGTCATACTCGTCCT')
# print(cg.get('CGCCTAAATAG'))
# cg.add('CGCCTAAATAG')
# print(cg.get('CGCCTAAATAG'))

cg.consume(books_seq)
# Print the count of the k-mer
print(cg.get('GCG'))
