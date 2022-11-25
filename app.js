(async () => {
  const { createFFmpeg } = FFmpeg

  async function mergeVideo(video, audio) {
      let { createFFmpeg, fetchFile } = FFmpeg;
      let ffmpeg = createFFmpeg();
      await ffmpeg.load();
      ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video));
      ffmpeg.FS('writeFile', 'audio.mp4', await fetchFile(audio));
      await ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp4', '-c', 'copy', 'output.mp4');
      const data = ffmpeg.read('output.mp4')
      return data
  };


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

  var audio = "https://rr5---sn-oguesn6s.googlevideo.com/videoplayback?expire=1669395939&ei=g6GAY4_6Jq7O2roP-Na24AU&ip=121.102.228.168&id=o-AFboTpu-0_1ADpJ-jIrhPYzJT5-8h9hduGxws-nBfa2Y&itag=251&source=youtube&requiressl=yes&mh=WZ&mm=31%2C26&mn=sn-oguesn6s%2Csn-3pm7kn7e&ms=au%2Conr&mv=m&mvi=5&pl=17&initcwndbps=936250&vprv=1&mime=audio%2Fwebm&gir=yes&clen=1364271&dur=90.021&lmt=1665621448643852&mt=1669373851&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPZYXqyoiqNcIXhc--iy5wvdfaEZujc4cpp-AkznsSncAiAXxlUNCKOOjfcC5AeEt6iUqcgVuJrXa-USY-RT78A0LQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLuUfxCObfzMZuCW7LBuEl7Z_N-eWMw27bnr1Yo3vZ7gCIQDTNl8d43HAAuAlHhyqGStqW97VC3i4FBBqGbgVBct8Wg%3D%3D"
  var video = "https://rr5---sn-oguesn6s.googlevideo.com/videoplayback?expire=1669395939&ei=g6GAY4_6Jq7O2roP-Na24AU&ip=121.102.228.168&id=o-AFboTpu-0_1ADpJ-jIrhPYzJT5-8h9hduGxws-nBfa2Y&itag=244&source=youtube&requiressl=yes&mh=WZ&mm=31%2C26&mn=sn-oguesn6s%2Csn-3pm7kn7e&ms=au%2Conr&mv=m&mvi=5&pl=17&initcwndbps=936250&vprv=1&mime=video%2Fwebm&gir=yes&clen=5816211&dur=89.999&lmt=1665623781717551&mt=1669373851&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5537434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgcpHOwqF0elvNBOTID2Bp-GmtjMw7pJUgvRy8ZQYVh6wCIQDiNWBLljtBLqsjVi9U44UKIVxhvkxqRasdgVKDVpeblA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLuUfxCObfzMZuCW7LBuEl7Z_N-eWMw27bnr1Yo3vZ7gCIQDTNl8d43HAAuAlHhyqGStqW97VC3i4FBBqGbgVBct8Wg%3D%3D"
  
  const _video = await mergeVideo(video,audio)
  const objectUrl = createObjectUrl([_video], { type: 'video/mp4' })
  insertVideo(objectUrl)

  document.body.removeChild(div)
})()

