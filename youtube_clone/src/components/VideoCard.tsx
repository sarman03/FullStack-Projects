  export function VideoCard(props:any){
    return <div>
       <img className="rounded-xl" src="/photo1.jpg" ></img>
        <div className="grid grid-cols-12 pt-3">

          <div className="col-span-1">
          <img className="rounded-full w-14 h-14" src={props.img} ></img>
          </div>

          <div className="col-span-11 ">
            {props.title}
          

          <div className="col-span-11 text-gray-600 text-base">
          {props.author}
          </div>

          <div className="col-span-11  text-gray-600 text-base">
          {props.views} | 13 days ago
          </div>
          </div>
        </div>
        

    </div>
 }