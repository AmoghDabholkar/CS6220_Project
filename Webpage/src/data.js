function getImage(name, imageFile, lowPrediction, midPrediction, highPrediction) {
  const publicUrl = process.env.PUBLIC_URL;
  const path = `${publicUrl}/people/${imageFile}.jpg`;
  
  return {
    id: Date.now(),
    name,
    src:path,
    thumbnailCaption: name,
    thumbnail: path,
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    Low: {
      src: `${publicUrl}/cloaked/low/${imageFile}_cloaked.jpeg`,
      groundTruth: imageFile,
      prediction: lowPrediction,
      predictionSrc: `${publicUrl}/people/${lowPrediction}.jpg`
    },
    Mid: {
      src: `${publicUrl}/cloaked/mid/${imageFile}_cloaked.jpeg`,
      groundTruth: imageFile,
      prediction: midPrediction,
      predictionSrc: `${publicUrl}/people/${midPrediction}.jpg`,
    },
    High: {
      src: `${publicUrl}/cloaked/high/${imageFile}_cloaked.jpeg`,
      groundTruth: imageFile,
      prediction: highPrediction,
      predictionSrc: `${publicUrl}/people/${highPrediction}.jpg`,
    }
  }
};

export const data = [
  getImage('Dalai Lama', '0001_01', '0001_01', '0001_01', '0001_01'),
  getImage('Abdullah II of Jordan', '0002_01', '0002_01', '0013_01', '0006_01'),
  getImage('Adhyayan Suman', '0003_01', '0004_01', '0002_01', '0009_01'),
  getImage('Aditya Seal', '0004_01', '0007_01', '0039_01', '0005_01'),
  getImage('Agata Passent', '0005_01', '0039_01', '0005_01', '0008_01'),
  getImage('Ahmet Davutoglu', '0006_01', '0006_01', '0001_01', '0012_01'),
  getImage('Airi Suzuki', '0007_01', '0007_01', '0007_01', '0019_02'),
  getImage('Aishwarya Rai Bachchan', '0008_01', '0008_01', '0013_01', '0004_01'),
  getImage('Alain Traore', '0009_01', '0009_01', '0042_01', '0039_01'),
  getImage('Alex Gonzaga', '0010_01', '0019_02', '0010_01', '0007_01'),
  getImage('Alexandra Edenborough', '0011_01', '0011_01', '0011_01', '0002_01'),
  getImage('Alodia Gosiengfiao', '0012_01', '0012_01', '0007_01', '0018_01'),
  getImage('Amber Brkich', '0013_01', '0014_01', '0013_01', '0013_01'),
  getImage('Ana Rosa Quintana', '0014_01', '0014_01', '0014_01', '0011_01'),
  getImage('Andrea Anders', '0015_01', '0018_01', '0015_01', '0009_01'),
  getImage('Andrew Upton', '0016_01', '0021_01', '0016_01', '0002_01'),
  getImage('Angelique Kidjo', '0017_01', '0017_01', '0040_01', '0017_01'),
  getImage('Anna Kalata', '0018_01', '0021_01', '0019_02', '0021_01'),
  getImage('Anne Schedeen', '0019_02', '0002_01', '0010_01', '0028_01'),
  getImage('Anne Princess Royal', '0020_01', '0024_02', '0021_01', '0021_01'),
  getImage('Anne Marie Duff', '0021_01', '0021_01', '0016_01', '0026_01'),
  getImage('Annete Bening', '0022_01', '0022_01', '0021_01', '0012_01'),
  getImage('Ante Gotovina', '0023_01', '0002_01', '0038_01', '0009_01'),
  getImage('Antonia Kidman', '0024_02', '0014_01', '0024_02', '0005_01'),
  getImage('Ana Cavaco Silva', '0025_01', '0028_01', '0025_01', '0025_01'),
  getImage('Apollo Quiboloy', '0026_01', '0026_01', '0027_01', '0019_02'),
  getImage('Archana Puran Singh', '0027_01', '0027_01', '0027_01', '0015_01'),
  getImage('Armando Iannucci', '0028_01', '0004_01', '0026_01', '0031_01'),
  getImage('Arsene Wenger', '0030_01', '0041_01', '0002_01', '0015_01'),
  getImage('Aya Miyama', '0031_01', '0031_01', '0031_01', '0016_01'),
  getImage('Ayumi Hamasaki', '0032_01', '0020_01', '0008_01', '0018_01'),
  getImage('Bart Freundlich', '0033_01', '0033_01', '0033_01', '0001_01'),
  getImage('Ben Falcone', '0035_01', '0041_01', '0021_01', '0025_01'),
  getImage('Ben Ofoedu', '0036_01', '0017_01', '0025_01', '0031_01'),
  getImage('Benigno Noynoy Aquino III', '0037_02', '0001_01', '0033_01', '0041_01'),
  getImage('Besik Kudokhov', '0038_01', '0010_01', '0004_01', '0018_01'),
  getImage('Bhairvi Goswami', '0039_01', '0011_01', '0026_01', '0042_01'),
  getImage('Billy Dennehy', '0040_01', '0004_01', '0019_02', '0001_01'),
  getImage('Armin Shimerman', '0041_01', '0025_01', '0040_01', '0018_01'),
  getImage('Bebe Cool', '0042_01', '0024_02', '0038_01', '0040_01'),
];
