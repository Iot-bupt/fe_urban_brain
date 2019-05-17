import React,{ Component } from 'react'
import{BrowserRouter as Router,Route,Link,Redirect,withRouter,Switch} from "react-router-dom";
import pin2 from './static/images/pin2.png';
class ThreeDMap extends Component {
  constructor(){
    super();
    this.state={
      flag:false,
    }
  }
  componentDidMount(){
    var that = this
    this.initPanorama(that);
  }
  /*componentDidUpdate(){
    this.initPanorama();
  }*/
  initPanorama(that){
    var div = document.getElementById('viewer');
    var PSV = new window.PhotoSphereViewer({
      // 全景图片路径
    //  panorama: 'Bryce-Canyon-National-Park-Mark-Doliner.jpg',
      panorama: './static/images/二居室.jpeg',
      // 容器
      container: div,
      //标题
      caption:"",
      // 关闭动画
      time_anim: false,
      //鱼眼镜头
      fisheye:true,
      // 显示导航栏
    //  navbar: true,
    //  自定义导航的顺序
      navbar:  [
      'autorotate',
      'zoom',
      'gyroscope',
      'markers',
      'caption',
      'fullscreen'
      ],
      //按钮提示
      lang: {
      autorotate: 'Automatic rotation',
      zoom: 'Zoom',
      zoomOut: 'Zoom out',
      zoomIn: 'Zoom in',
      download: 'Download',
      fullscreen: 'Fullscreen',
      markers: 'Markers',
      gyroscope: 'Gyroscope'
      },
      // 设置画布大小
      size: {
      width: '100%',
    //   height: '323px'
      height: '603px'
      },
    //  启用陀螺仪
      gyroscope:false,
    //  准备就绪就执行
    //  onready:Ready,
      // 标记列表
      markers: [
        {
          id:'return-button',
          image:pin2,
          //circle:20,
          width:50,
          height:50,
          longitude:0,
          latitude:0,
          anchor:'bottom center',
          tooltip:{
              content:'回到数字地球',
              fontsize:'xx-large',
          },
        },
        {
          id:'try',
          image:pin2,
          //circle:20,
          width:50,
          height:50,
          longitude:2,
          latitude:0,
          anchor:'bottom center',
          tooltip:{
              content:'try',
              fontsize:'xx-large',
          },
        },
      ]
    });
    PSV.on('select-marker',function(marker){
      if(marker.id==='return-button')
      {
        that.setState({
          flag:true,
        })
      }
    });
    PSV.on('select-marker',function(marker){//点击标签后的逐渐聚焦效果
      PSV.gotoMarker(marker,1000);
    });
  }
  render(){
    if(this.state.flag){
      return <Redirect to='/safety'/>
    }
    return(
        <div id="viewer"></div>
      
    )
  }
}

export default ThreeDMap