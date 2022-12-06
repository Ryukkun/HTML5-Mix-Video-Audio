(async () => {
    const { createFFmpeg } = FFmpeg
  
    async function mergeVideo(video, audio) {
        let { createFFmpeg, fetchFile } = FFmpeg;
        let ffmpeg = createFFmpeg();
        await ffmpeg.load();
        await ffmpeg.run('-i', video, '-i', audio, '-c', 'copy', 'output.mp4');
        const data = ffmpeg.FS('readFile', 'output.mp4')
        return data
    };
  
  
    function createObjectUrl(array, options) {
      const blob = new Blob(array, options)
      const objectUrl = URL.createObjectURL(blob)
      return objectUrl
    }
  
  
    const div = document.createElement('div')
    div.innerText = '動画生成中'
    document.body.appendChild(div)
  
    var audio = "https://rr2---sn-oguelnzs.googlevideo.com/videoplayback?expire=1670312633&ei=WZ6OY924KZuBvcAP5IWruAs&ip=121.102.228.168&id=o-AC5ZkR8ajFZ0q954CHRVC0qUlIY6a9wsy9L2z2Qo8NBo&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=Et&mm=31%2C26&mn=sn-oguelnzs%2Csn-3pm76nes&ms=au%2Conr&mv=m&mvi=2&pl=17&initcwndbps=1105000&vprv=1&mime=video%2Fmp4&ns=-eLMuP9OTlMgMsqkEYrSwsMJ&gir=yes&clen=59896222&dur=208.833&lmt=1667865641122395&mt=1670290627&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=TVHTML5_SIMPLY_EMBEDDED_PLAYER&txp=5535434&n=FY8vtfs5S07dfQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgfQLKJDV_FXgD25eRU8YZoZ22gitNOtQchEd7bTWJsU8CIQC7mEwSQRXhoitQxAAQmOEkkZ58RRyJlDlLcZw9xtev8w%3D%3D&sig=AOq0QJ8wRQIhALH9iwMkedvoUWkvqjXhSWLeXARqcpzTTV3qgni_DFlfAiB3ts2seI_AnqrhEflWQ3G4PwElr7HUpNFgXXEdUhSnOA%3D%3D"
    var video = "https://rr2---sn-oguelnzs.googlevideo.com/videoplayback?expire=1670312633&ei=WZ6OY924KZuBvcAP5IWruAs&ip=121.102.228.168&id=o-AC5ZkR8ajFZ0q954CHRVC0qUlIY6a9wsy9L2z2Qo8NBo&itag=140&source=youtube&requiressl=yes&mh=Et&mm=31%2C26&mn=sn-oguelnzs%2Csn-3pm76nes&ms=au%2Conr&mv=m&mvi=2&pl=17&initcwndbps=1105000&vprv=1&mime=audio%2Fmp4&ns=-eLMuP9OTlMgMsqkEYrSwsMJ&gir=yes&clen=3381816&dur=208.909&lmt=1667864461426288&mt=1670290627&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=TVHTML5_SIMPLY_EMBEDDED_PLAYER&txp=5532434&n=FY8vtfs5S07dfQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgKHRKIZto-rU28EQzLAJyajURxKG7x3Xt-ow7AeFSvMgCIBUvRayJZoBLLsSOnil-jMqHmWt4J0v8xSuSbQK2iT7a&sig=AOq0QJ8wRQIhAOijFboCz4jFu93ViDWksRQqOb8yebNWniPUAVHZIITQAiBy-muJLtaNJpXQe_DvxJdj2OhpBfz601gBq2NY0LemJA%3D%3D"
    
    const _video = await mergeVideo(video,audio)
    //const objectUrl = createObjectUrl([_video], { type: 'video/mp4' })
    const __video = document.getElementById('output-video');
    __video.src = URL.createObjectURL(new Blob([_video.buffer], { type: 'video/mp4' }));
  
    document.body.removeChild(div)
  })()
  
  