const apiToken = 'BQCnuAw9477-ipRjwhv2Krn6giPtwiDydEFLpAS7mw-UvBo4sqihQQqaVXyERaEdJGF1bT5MoKgbGACfL-g2QeLbcE1Uq6_Q-fCXDahVZRQcYXatcBLyJ95c0aQINpP98EU27dOh0gzpYi6OzlU7p0SNjHuh8tJptC-r7sBd3pnMQ-vDDg98Hl9TgaLvXohYvfQC9yfW4-PU3xMvdrwVYeqYWg';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};