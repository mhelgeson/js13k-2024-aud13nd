import parseTones from "./index";

describe("audio/parse/tones", () => {
  test.each([
    ["R", 0],
    ["C-1", 8.175799],
    ["C0", 16.3516],
    ["C1", 32.7032],
    ["C2", 65.40639],
    ["C3", 130.8128],
    ["C4", 261.6256],
    ["C5", 523.2511],
    ["C6", 1046.502],
    ["C7", 2093.005],
    ["C8", 4186.009],
    ["C9", 8372.018],
    ["C#-1", 8.661957],
    ["C#0", 17.32391],
    ["C#1", 34.64783],
    ["C#2", 69.29566],
    ["C#3", 138.5913],
    ["C#4", 277.1826],
    ["C#5", 554.3653],
    ["C#6", 1108.731],
    ["C#7", 2217.461],
    ["C#8", 4434.922],
    ["C#9", 8869.844],
    ["D-1", 9.177024],
    ["D0", 18.35405],
    ["D1", 36.7081],
    ["D2", 73.41619],
    ["D3", 146.8324],
    ["D4", 293.6648],
    ["D5", 587.3295],
    ["D6", 1174.659],
    ["D7", 2349.318],
    ["D8", 4698.636],
    ["D9", 9397.273],
    ["Eb-1", 9.722718],
    ["Eb0", 19.44544],
    ["Eb1", 38.89087],
    ["Eb2", 77.78175],
    ["Eb3", 155.5635],
    ["Eb4", 311.127],
    ["Eb5", 622.254],
    ["Eb6", 1244.508],
    ["Eb7", 2489.016],
    ["Eb8", 4978.032],
    ["Eb9", 9956.063],
    ["E-1", 10.30086],
    ["E0", 20.60172],
    ["E1", 41.20344],
    ["E2", 82.40689],
    ["E3", 164.8138],
    ["E4", 329.6276],
    ["E5", 659.2551],
    ["E6", 1318.51],
    ["E7", 2637.02],
    ["E8", 5274.041],
    ["E9", 10548.08],
    ["F-1", 10.91338],
    ["F0", 21.82676],
    ["F1", 43.65353],
    ["F2", 87.30706],
    ["F3", 174.6141],
    ["F4", 349.2282],
    ["F5", 698.4565],
    ["F6", 1396.913],
    ["F7", 2793.826],
    ["F8", 5587.652],
    ["F9", 11175.3],
    ["F#-1", 11.56233],
    ["F#0", 23.12465],
    ["F#1", 46.2493],
    ["F#2", 92.49861],
    ["F#3", 184.9972],
    ["F#4", 369.9944],
    ["F#5", 739.9888],
    ["F#6", 1479.978],
    ["F#7", 2959.955],
    ["F#8", 5919.911],
    ["F#9", 11839.82],
    ["G-1", 12.24986],
    ["G0", 24.49971],
    ["G1", 48.99943],
    ["G2", 97.99886],
    ["G3", 195.9977],
    ["G4", 391.9954],
    ["G5", 783.9909],
    ["G6", 1567.982],
    ["G7", 3135.963],
    ["G8", 6271.927],
    ["G9", 12543.85],
    ["Ab-1", 12.97827],
    ["Ab0", 25.95654],
    ["Ab1", 51.91309],
    ["Ab2", 103.8262],
    ["Ab3", 207.6523],
    ["Ab4", 415.3047],
    ["Ab5", 830.6094],
    ["Ab6", 1661.219],
    ["Ab7", 3322.438],
    ["Ab8", 6644.875],
    ["Ab9", 13289.75],
    ["A-1", 13.75],
    ["A0", 27.5],
    ["A1", 55.0],
    ["A2", 110.0],
    ["A3", 220.0],
    ["A4", 440.0],
    ["A5", 880.0],
    ["A6", 1760.0],
    ["A7", 3520.0],
    ["A8", 7040.0],
    ["A9", 14080.0],
    ["Bb-1", 14.56762],
    ["Bb0", 29.13524],
    ["Bb1", 58.27047],
    ["Bb2", 116.5409],
    ["Bb3", 233.0819],
    ["Bb4", 466.1638],
    ["Bb5", 932.3275],
    ["Bb6", 1864.655],
    ["Bb7", 3729.31],
    ["Bb8", 7458.62],
    ["Bb9", 14917.24],
    ["B-1", 15.43385],
    ["B0", 30.86771],
    ["B1", 61.73541],
    ["B2", 123.4708],
    ["B3", 246.9417],
    ["B4", 493.8833],
    ["B5", 987.7666],
    ["B6", 1975.533],
    ["B7", 3951.066],
    ["B8", 7902.133],
    ["B9", 15804.27],
    // enharmonics and middle octave [4]
    ["B#", 261.6256],
    ["Dbb", 261.6256],
    ["C", 261.6256],
    ["C#", 277.1826],
    ["B##", 277.1826],
    ["Db", 277.1826],
    ["C##", 293.6648],
    ["Ebb", 293.6648],
    ["D", 293.6648],
    ["D#", 311.127],
    ["Fbb", 311.127],
    ["Eb", 311.127],
    ["Fb", 329.6276],
    ["D##", 329.6276],
    ["E", 329.6276],
    ["E#", 349.2282],
    ["Gbb", 349.2282],
    ["F", 349.2282],
    ["F#", 369.9944],
    ["E##", 369.9944],
    ["Gb", 369.9944],
    ["F##", 391.9954],
    ["Abb", 391.9954],
    ["G", 391.9954],
    ["G#", 415.3047],
    ["Ab", 415.3047],
    ["G##", 440],
    ["Bbb", 440],
    ["A", 440],
    ["A#", 466.1638],
    ["Bb", 466.1638],
    ["Cb", 493.8833],
    ["A##", 493.8833],
    ["B", 493.8833],
  ])("input '%s' should be %s Hz", (input, hertz) => {
    const [tone] = parseTones(input);
    expect(tone).toBeCloseTo(hertz);
  });
});
