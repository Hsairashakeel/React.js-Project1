import React from 'react'
import RevSlider, { Slide, Caption } from 'react-rev-slider'

const config = {
  delay: 3000,
  startwidth: 1170,
  startheight: 600,
  hideThumbs: 10,
  fullWidth: "on",
  forceFullWidth: "on"
};

export default class Welcome extends React.Component
{
  render()
  {
    return (
      <RevSlider config={config}>
      <Slide
        src="images/images/slider/img-1.jpg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "fade",
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >
        <Caption
          class="tp-caption sft fadeout slider-caption-sub slider-caption-1"
          data-x="center"
          data-y="140"
          data-speed="700"
          data-start="1500"
          data-easing="easeOutBack"
        >
          <img src="images/slider/hom1-slide1.png" alt="icons"></img>
      </Caption>
      <Caption
          class="tp-caption sft fadeout slider-caption-sub slider-caption-1"
          data-x="center"
          data-y="260"
          data-speed="700"
          data-start="1500"
          data-easing="easeOutBack"
        >
          WELCOME TO
      </Caption>
      <Caption
          class="tp-caption sfb fadeout slider-caption slider-caption-sub-1"
          data-x="center"
          data-y="300"
          data-speed="700"
          data-start="2000"
          data-easing="easeOutBack"
        >
          The Jaffa Suites
      </Caption>
      <a href="#" class="tp-caption sfb fadeout awe-btn awe-btn-12 awe-btn-slider" data-x="center" data-y="380" data-easing="easeOutBack" data-speed="700" data-start="2200">VIEW NOW</a>
      </Slide>

      <Slide
        src="images/images/slider/img-2.jpg"
        alt="slidebg1"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        slideProperties={{
          'data-transition': "fade",
          'data-slotamount': "7",
          'data-masterspeed': "1500"
        }}
      >
        <Caption
          class="tp-caption sft fadeout slider-caption-sub slider-caption-1"
          data-x="center"
          data-y="140"
          data-speed="700"
          data-start="1500"
          data-easing="easeOutBack"
        >
          <img src="images/icon-slider-1.png" alt="" />
      </Caption>
      <Caption
          class="tp-caption sft fadeout slider-caption-sub slider-caption-sub-3"
          data-x="center"
          data-y="200"
          data-speed="700"
          data-start="1500"
          data-easing="easeOutBack"
        >
          EACH HOTEL IS
      </Caption>
      <Caption
          class="tp-caption sfb fadeout slider-caption slider-caption-3"
          data-x="center"
          data-y="250"
          data-speed="700"
          data-start="2000"
          data-easing="easeOutBack"
        >
          UNIQUE 60%
      </Caption>
      <Caption
          class="tp-caption sfb fadeout slider-caption-sub slider-caption-sub-3"
          data-x="center"
          data-y="350"
          data-speed="700"
          data-start="2000"
          data-easing="easeOutBack"
        >
         JUST LIKE YOU
      </Caption>
      </Slide>
    </RevSlider>
    );
  }
}