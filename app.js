(async () => {
  const { createFFmpeg } = FFmpeg

async function mergeVideo(video, audio) {
    let { createFFmpeg, fetchFile } = FFmpeg;
    let ffmpeg = createFFmpeg();
    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video));
    ffmpeg.FS('writeFile', 'audio.mp4', await fetchFile(audio));
    await ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp4', '-c', 'copy', 'output.mp4');
    let data = await ffmpeg.FS('readFile', 'output.mp4');
    return new Uint8Array(data.buffer);
};

  async function generateVideo(images) {
    const ffmpeg = createFFmpeg({ log: true })
    await ffmpeg.load()

    images.forEach(async (image, i) => {
      await ffmpeg.write(`image${i}.png`, image)
    })

    await ffmpeg.run('-r 1 -i image%d.png -pix_fmt yuv420p output.mp4')
    const data = ffmpeg.read('output.mp4')
    return data
  }

  function createObjectUrl(array, options) {
    const blob = new Blob(array, options)
    const objectUrl = URL.createObjectURL(blob)
    return objectUrl
  }

  function insertVideo(src) {
    const video = document.createElement('video')
    video.controls = true

    video.onloadedmetadata = () => {
      document.body.appendChild(video)
    }

    video.src = src
  }

  const div = document.createElement('div')
  div.innerText = '動画生成中'
  document.body.appendChild(div)

  const images = generateImages()
  const video = await generateVideo(images)
  const objectUrl = createObjectUrl([video], { type: 'video/mp4' })
  insertVideo(objectUrl)

  document.body.removeChild(div)
})()

