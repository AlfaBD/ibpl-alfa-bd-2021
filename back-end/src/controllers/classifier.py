import librosa
import numpy as np
from pickle import load
from sys import stdin
from json import loads, dumps


class Classifier():
    def __init__(self, options):
        self.n_mfcc = 12
        self.classes = {'bom': 0, 'regular': 1, 'ruim': 2}
        self.path_classifier = ''
    
    def pre_processing(self, path):
        x, sr = librosa.load(path)
        mfcc = librosa.feature.mfcc(x, sr=sr, n_mfcc=self.n_mfcc).T
        X = np.vstack(tuple([mfcc]))
        return X
    
    def run(self, path=None, file=None):
        X = self.pre_processing(path)
        
        with open(self.path_classifier,"rb") as f:
            classifier = load(f)
        
        prediciton = classifier.predict(X)
        
        
        
#'{"1": "efvcvsd", "2": "gbhfgb"}'
        
    
if __name__ == '__main__': 
    try:
        options = {}
        for line in stdin:
            options = loads(line)
            break
            
        classifier = Classifier(options)
        prediction = classifier.run()
    except Exception as error:
        print (f'Error: {error}\n')
    