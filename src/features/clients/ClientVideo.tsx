const ClientVideo = () => {
  return (
    <div className="p-2 md:p-0 w-full  h-[30rem] md:h-[50rem] my-[5rem] flex items-center justify-center ">
      <video
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/1b55470c-70bb-4585-9c22-951be34ac394/e70cd245-6f6d291c?__token__=st=1748531980~exp=1748535580~acl=%2Fv3-1%2Fplayback%2F1b55470c-70bb-4585-9c22-951be34ac394%2Fe70cd245-6f6d291c%2A~hmac=24a5d4edfdae4da93792156a390528b3cba0c3e224b1f98172d305296a926719&r=dXMtd2VzdDE%3D#t=0.001"
        className="h-full w-full max-w-[50rem] object-cover rounded-md overflow-hidden"
        loop
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default ClientVideo;
