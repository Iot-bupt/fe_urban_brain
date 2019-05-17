import React, { Component } from 'react'
import './style.css';
import { Button, Layout, Menu, Icon, } from 'antd';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from "react-router-dom";
import backgroundImgUrl from './../../static/image/world_neo.jpg';
import pin1 from './static/images/pin1.png';
import ThreeDMap from './components/threeDMap';
//import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
import DigitalCard from '../../components/digitalCard';
import moniter_demo from './../../static/image/moniter_demo.png' ;

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1185530_daufza148oe.js',
})

const CHARGING_PILE_DATA = {
  title: '充电桩使用情况',
  items: [
    {
      icon: '',
      name: '已用',
      count: 20,
    },
    {
      icon: '',
      name: '空闲',
      count: 10,
    }
  ]
}

class PublicSafety extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }

  componentDidMount() {
    var that = this;
    const Cesium = window.Cesium;
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZTUxYWFmNC05NWU2LTQ2MGItYWY4Yi1lY2Q0NDViMDc4ZTMiLCJpZCI6OTY0Mywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1NDY0MTE4NH0.7tGsA70xihjhf9LmzTdDgISrWPs9ioMjGXQ-0YTWlfM';
    var viewer = new Cesium.Viewer('map', {
      /*imageryProvider:Cesium.createWorldImagery({
        style:Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS
      }),*/
      scene3Donly: true,//只以3D形式显示场景
      selectionIndicator: false,//
      baseLayerPicker: false//关闭地表图层选择器
    });
    var options = {};
    //options.defaultResetView = Cesium.Rectangle.fromDegrees(71, 3, 90, 14);
    // Only the compass will show on the map
    options.enableCompass = true;
    options.enableZoomControls = false;
    options.enableDistanceLegend = false;
    options.enableCompassOuterRing = true;
    viewer.extend(Cesium.viewerCesiumNavigationMixin, options);
    //////////////////////////////////////////////////////////////////////////
    // Loading Imagery
    //////////////////////////////////////////////////////////////////////////

    // // Remove default base layer
    viewer.imageryLayers.remove(viewer.imageryLayers.get(0));//移除默认图层

    // // Add Sentinel-2 imagery
    viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3954 }));

    //////////////////////////////////////////////////////////////////////////
    // Loading Terrain，加载地形数据
    //////////////////////////////////////////////////////////////////////////

    // // Load Cesium World Terrain
    viewer.terrainProvider = Cesium.createWorldTerrain({
      requestWaterMask: true, // required for water effects
      requestVertexNormals: true // required for terrain lighting
    });
    // // Enable depth testing so things behind the terrain disappear.
    //使得地形数据背后的object正确显示
    viewer.scene.globe.depthTestAgainstTerrain = true;

    //////////////////////////////////////////////////////////////////////////
    // Configuring the Scene
    //////////////////////////////////////////////////////////////////////////

    // // Enable lighting based on sun/moon positions激活太阳位置的光照
    viewer.scene.globe.enableLighting = true;
    /////////////////////////////////////////////////////////////////////////

    // // Create an initial camera view
    var initialPosition = new Cesium.Cartesian3.fromDegrees(116.656835, 40.130008, 2000);//定位
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);//定方向
    var homeCameraView = {//默认相机
      destination: initialPosition,
      orientation: {
        heading: initialOrientation.heading,
        pitch: initialOrientation.pitch,
        roll: initialOrientation.roll
      }
    };
    // // Set the initial view设置相机初始视角和位置
    //viewer.scene.camera.setView(homeCameraView);

    // // Add some camera flight animation options
    homeCameraView.duration = 2.0;
    homeCameraView.maximumHeight = 2000;
    homeCameraView.pitchAdjustHeight = 2000;
    homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
    // // Override the default home button
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {//重写home键
      e.cancel = true;//取消默认
      viewer.scene.camera.flyTo(homeCameraView);//点击home键后，将摄像机移动到顺义
    });
    var pinBuilder = new Cesium.PinBuilder();
    var name = '顺义坐标';
    var billboard = viewer.entities.add({
      id: name,
      name: name,
      position: Cesium.Cartesian3.fromDegrees(116.656835, 40.130008, 1),
      description: '顺义地标',
      //clampToGround: true,
      billboard: {
        image: pinBuilder.fromText(name, Cesium.Color.GREEN, 48).toDataURL(),
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(10.0, 5000.0),//设置billboard在什么范围内可以显示出来
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,//获取或者设置billboard的高度参考，参数为“位置贴到地形上”
        disableDepthTestDistance: Number.POSITIVE_INFINITY,//设置相机不会进入地下
        show: true
      }
    });
    /*var boundingSphere = billboard.boundingSphere;
    var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
    var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 10);
    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
    billboard.modelMatrix = Cesium.Matrix4.fromTranslation(translation);*/

    viewer.zoomTo(billboard);
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (e) {
      var pick = viewer.scene.pick(e.position);
      if (Cesium.defined(pick)) {
        that.setState({
          flag: true
        })
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    var previousPickedEntity = undefined;
    handler.setInputAction(function (movement) {
      var pickedPrimitive = viewer.scene.pick(movement.endPosition);
      var pickedEntity = (Cesium.defined(pickedPrimitive)) ? pickedPrimitive.id : undefined;
      // Unhighlight the previously picked entity
      if (Cesium.defined(previousPickedEntity)) {
        previousPickedEntity.billboard.scale = 1.0;
        previousPickedEntity.billboard.color = Cesium.Color.WHITE;
      }
      // Highlight the currently picked entity
      if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {
        pickedEntity.billboard.scale = 2.0;
        pickedEntity.billboard.color = Cesium.Color.ORANGERED;
        previousPickedEntity = pickedEntity;
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }
  render() {
    if (this.state.flag) {
      return <Redirect to='/inside' />
    }
    return (
      <div className="publicSafetyContainer">
        <div className="publicSafetyWrap">
          <div id="map"></div>
          <div className="graphicWrap_1">
            <DigitalCard {...CHARGING_PILE_DATA} />
            <DigitalCard {...CHARGING_PILE_DATA} />
          </div>
          <div className="graphicWrap_2">
            <DigitalCard {...CHARGING_PILE_DATA} />
            <img src={moniter_demo} height="200px" width="300px"/>
          </div>
        </div>
      </div>
    )
  }

}

export default PublicSafety