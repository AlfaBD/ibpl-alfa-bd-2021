import os
import librosa
import numpy as np
from scipy import stats
from pickle import load
from sys import stdin


class Classifier():
    """
        Author: Aline Rodrigues
        Created: 06/06/2021
        Execute prediciton 
    """
    
    def __init__(self, path_audio):
        self.n_mfcc = 12
        self.classes = ['alto', 'medio', 'baixo']
        self.path_classifier = os.path.dirname(os.path.abspath(__file__)) + '/classifier.pickle'
        self.path_audio = path_audio
         
    def pre_processing(self):
        x, sr = librosa.load(self.path_audio)
        mfcc = librosa.feature.mfcc(x, sr=sr, n_mfcc=self.n_mfcc).T
        X = np.vstack(tuple([mfcc]))
        return X
    
    def run(self):
        X = self.pre_processing()
       
        with open(self.path_classifier, "rb") as model:
            classifier = load(model)

        prediction = classifier.predict(X)
        #classifier.predict_proba(X)
        return self.classes[int(stats.mode(prediction)[0][0])]
            
if __name__ == '__main__': 
    try:
        path_audio = None
        for line in stdin:
            path_audio = line[:-1]
            break
        prediction = Classifier(path_audio).run()
        print (prediction)
    except Exception as error:
        print ('Error: ' + str(error) + '\n')

    