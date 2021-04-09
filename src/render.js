async function getSources()
{
    await navigator.mediaDevices.getUserMedia(
    {
        video: true
    }).then(stream =>
    {
        document.getElementById("vid").srcObject = stream;
    });
}
