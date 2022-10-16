function Gallery(props){

  console.log(props.props)
    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container px-14 py-4 mx-auto flex flex-wrap" style={{marginLeft:'0px'}}>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap ">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={props.props[0]}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={props.props[1]}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={props.props[2]}/>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
export default Gallery;