const API =
  "https://shazam.p.rapidapi.com/artists/get-top-songs?id=356545647&l=en-US";

  const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "493b83462fmshd706d5fbf6aa9bap11d4a2jsn7c01376d197e",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

async function getVideos(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await getVideos(API);
    let view = `
        ${videos.data.map(
          (video) => `
        <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
              <img src="https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/60/ca/ce/60cace9d-9faa-5a6b-f8c4-20aa3ba7c1b5/075679702593.jpg/1425x1425bb.jpg" alt="${video.attributes.albumName}" width="${video.attributes.artwork.width}" height="${video.attributes.artwork.height}"  class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.attributes.name}
              </h3>
              
            </div>
          </div>`
        ).slice(0, 4).join('')}
         `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
