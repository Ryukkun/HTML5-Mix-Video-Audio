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

  var audio = "https://rr2---sn-oguelnsk.googlevideo.com/videoplayback?expire=1669368466&ei=MjaAY9DpN--G2roPmsSiqAI&ip=121.102.228.168&id=o-ABXShh2iqvc5ZEe6ffp2H02ktPtw8otGgM5UYx-T-E00&itag=139&source=youtube&requiressl=yes&mh=vw&mm=31%2C29&mn=sn-oguelnsk%2Csn-oguesnde&ms=au%2Crdu&mv=m&mvi=2&pl=17&gcr=jp&initcwndbps=882500&vprv=1&mime=audio%2Fmp4&gir=yes&clen=15661425&dur=2568.266&lmt=1663536989811885&mt=1669346496&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgViWcR-7YIhMu80VPfxNtDUca2qdsQkQ9e7AqGHPuzjgCIQCxICD4hklSe3p55_bbplgtEPd5o8M820ielSVCK4O5NA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJALRzosE5s2Q-oqfaDEIOa1bHAXeeq-KPd03ba3vPKRAiBfgD87e3GFlqM_vIV3L3EgKX1PXfvmj2oCDdquhD4ziw%3D%3D"
  var video = "https://rr2---sn-oguelnsk.googlevideo.com/videoplayback?expire=1669368466&ei=MjaAY9DpN--G2roPmsSiqAI&ip=121.102.228.168&id=o-ABXShh2iqvc5ZEe6ffp2H02ktPtw8otGgM5UYx-T-E00&itag=247&source=youtube&requiressl=yes&mh=vw&mm=31%2C29&mn=sn-oguelnsk%2Csn-oguesnde&ms=au%2Crdu&mv=m&mvi=2&pl=17&gcr=jp&initcwndbps=882500&vprv=1&mime=video%2Fwebm&gir=yes&clen=90519232&dur=2568.100&lmt=1663544753715563&mt=1669346496&fvip=1&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5437434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAMzf7CrBhtkK2NklbfTuOvn_wlUFMz1HJuju8HqLlALyAiAmlTNyubUXT9E8nj4jdm8paRV1KBPC1lyVWlp2e8EEEg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJALRzosE5s2Q-oqfaDEIOa1bHAXeeq-KPd03ba3vPKRAiBfgD87e3GFlqM_vIV3L3EgKX1PXfvmj2oCDdquhD4ziw%3D%3D"
  
  const _video = await mergeVideo(video,audio)
  const objectUrl = createObjectUrl([_video], { type: 'video/mp4' })
  insertVideo(objectUrl)

  document.body.removeChild(div)
})()

