from Bio.Seq import Seq

#create a sequence object
# my_seq = Seq('CATGTAGACTAG')
#or open a fasta file
with open("/Users/Megatron/Downloads/BRCA1_test.fasta") as f:
    f.readline() # skip the first line of metadata
    my_seq = f.read()
    str_seq = Seq(my_seq)
#print out some details about it
print 'seq %s is %i bases long' % (my_seq, len(my_seq))
print 'reverse complement is %s' % str_seq.reverse_complement()
print 'protein translation is %s' % str_seq.translate()


# When parsing a fasta file with multiple sequences
from Bio.SeqIO.FastaIO import FastaIterator
def mult_fasta_reader(filename):
    with open(filename) as handle:
        for record in FastaIterator(handle):
            # return record
            yield record

print mult_fasta_reader("/Users/Megatron/Downloads/BRCA1_test.fasta_multsequences.fasta")