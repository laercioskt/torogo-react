import React, { PureComponent } from 'react';

class Logo extends PureComponent {

    invertColor(hexTripletColor) {
        var color = hexTripletColor;
        color = color.substring(1);           // remove #
        color = parseInt(color, 16);          // convert to integer
        color = 0xFFFFFF ^ color;             // invert three bytes
        color = color.toString(16);           // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color;                  // prepend #
        return color;
    };

  render() {
    var color = this.invertColor(this.props.color);
    return <g >
              <svg>
                  <g fill={color} transform={"translate(0.25,0.25) scale(0.5)"} >
                    <path
                        fill={color} strokeWidth="0.00215996"
                        d="m 1.0000029,0.50011321 c 0,-0.0743877 -0.0829597,-0.14488434 -0.2101509,-0.1886015 C 0.8192038,0.16594071 0.8061585,0.05012471 0.748678,0.0130453 0.73542885,0.0043477 0.71993755,2.2771636e-4 0.70301955,2.2771636e-4 V 0.05126915 c 0.009376,0 0.016918,0.00206 0.0232367,0.0059511 0.0277212,0.01785297 0.0397473,0.08583197 0.0303711,0.173266 -0.002242,0.0215153 -0.005911,0.0441749 -0.0103954,0.0672923 C 0.70628077,0.2867921 0.66266071,0.27832339 0.61679847,0.27283008 0.5892812,0.23048624 0.56074477,0.19203365 0.53200436,0.1583874 0.59845362,0.08903523 0.6608262,0.05104026 0.70322339,0.05104026 V -1.1717256e-6 C 0.64716955,-1.1717256e-6 0.57378991,0.04486028 0.49959507,0.12268132 0.42540022,0.04531806 0.35202058,9.1438064e-4 0.29596675,9.1438064e-4 V 0.05195581 c 0.0421932,0 0.10476976,0.03776608 0.17121902,0.10666048 -0.0285366,0.0336463 -0.057073,0.07187 -0.0841827,0.11421379 -0.0460659,0.005493 -0.0896861,0.013962 -0.12963717,0.0251774 -0.004688,-0.0228885 -0.008153,-0.0450903 -0.0105993,-0.0663766 -0.00958,-0.0874343 0.002242,-0.15541318 0.0297595,-0.17349519 0.006115,-0.0041198 0.0140644,-0.0059509 0.0234407,-0.0059509 V 0.00114327 c -0.0171218,0 -0.0326131,0.00411998 -0.0460661,0.01281758 C 0.19262396,0.05104026 0.17978252,0.16662738 0.20933813,0.3117406 0.0825545,0.35568665 2.5742528e-6,0.42595438 2.5742528e-6,0.50011321 c 0,0.0743877 0.082959595747,0.14488433 0.2101508957472,0.1886015 -0.0293518,0.14557099 -0.0163066,0.26138699 0.041174,0.29846641 0.0132491,0.008698 0.0287404,0.0128176 0.0458622,0.0128176 0.0560538,0 0.12943334,-0.0448616 0.20362832,-0.1226825 0.0741949,0.0773633 0.14757449,0.12176694 0.20362832,0.12176694 0.0171218,0 0.0326131,-0.00412 0.0460659,-0.0128176 0.0572769,-0.0370794 0.0701183,-0.15266652 0.0405627,-0.29777974 C 0.91745083,0.64476865 1.0000029,0.57427203 1.0000029,0.50011321 Z M 0.73461351,0.34744668 c -0.007542,0.0295263 -0.0169181,0.0599679 -0.0275174,0.0904097 -0.008357,-0.0183107 -0.0171218,-0.0366216 -0.0267019,-0.0549325 -0.009376,-0.0183107 -0.0193641,-0.0361639 -0.0293519,-0.053559 0.0289442,0.004806 0.0568692,0.0107576 0.0835712,0.0180818 z M 0.64125835,0.5912096 c -0.0158988,0.0308994 -0.0322055,0.0601968 -0.0491235,0.0874342 -0.0303711,0.002976 -0.0611497,0.004578 -0.0921321,0.004578 -0.0307786,0 -0.0615572,-0.001602 -0.0917245,-0.004349 C 0.39136025,0.6516354 0.37484975,0.6225669 0.35895085,0.5918964 0.34345965,0.5619124 0.32939525,0.5314706 0.31655385,0.5008 c 0.0126376,-0.0306707 0.0269059,-0.0613413 0.0421933,-0.0913253 0.0158988,-0.0308994 0.0322055,-0.0601968 0.0491235,-0.0874342 0.030371,-0.002976 0.0611497,-0.004578 0.0921322,-0.004578 0.0307786,0 0.0615572,0.001602 0.0917245,0.004349 0.016918,0.0272374 0.0334285,0.0563059 0.0493273,0.0869764 0.0154913,0.029984 0.0295557,0.0604258 0.0423972,0.0910964 -0.0128414,0.0306707 -0.0269059,0.0613412 -0.0421935,0.0913253 z m 0.0658378,-0.0297551 c 0.0110069,0.0306707 0.0203832,0.0613412 0.0281289,0.0910964 -0.0267021,0.007324 -0.0548308,0.0135042 -0.0839789,0.0183108 0.009988,-0.0176241 0.0199755,-0.0357061 0.0293519,-0.0542457 0.009376,-0.0183109 0.018141,-0.0368505 0.0264981,-0.0551615 z M 0.5004104,0.80567515 C 0.4814541,0.78370205 0.4624976,0.75921135 0.4437451,0.73243175 c 0.0183448,9.1494e-4 0.0370975,0.001602 0.0560538,0.001602 0.0191602,0 0.0381165,-4.5747e-4 0.0566653,-0.001602 -0.018345,0.0267796 -0.0373013,0.0512703 -0.0560538,0.0732434 z M 0.34875936,0.67086159 c -0.0289442,-0.004807 -0.0568692,-0.0107576 -0.0835712,-0.0180819 0.007542,-0.0295263 0.016918,-0.0599681 0.0275174,-0.0904097 0.008357,0.0183109 0.0171218,0.0366216 0.0267019,0.0549325 0.00958,0.0183107 0.019364,0.0361639 0.0293519,0.0535591 z M 0.49939123,0.19455142 c 0.0189564,0.0219729 0.0379128,0.0464637 0.0566653,0.0732433 -0.0183448,-9.1494e-4 -0.0370975,-0.001602 -0.0560538,-0.001602 -0.0191602,0 -0.0381167,4.5747e-4 -0.0566653,0.001602 0.0183448,-0.0267796 0.0373013,-0.0512703 0.0560538,-0.0732433 z M 0.34855539,0.32936483 c -0.009988,0.0176241 -0.0199755,0.0357061 -0.0293518,0.0542457 -0.009376,0.0183109 -0.018141,0.0366216 -0.0264981,0.0549325 -0.0110071,-0.0306707 -0.0203833,-0.0613412 -0.0281289,-0.0910964 0.0267021,-0.007095 0.0548308,-0.0132754 0.0839788,-0.0180818 z m -0.184468,0.28656438 c -0.0721565,-0.0345617 -0.11883408,-0.079881 -0.11883408,-0.115816 0,-0.035935 0.04667758,-0.0814831 0.11883408,-0.11581601 0.0175296,-0.008469 0.0366898,-0.016022 0.0564615,-0.0231174 0.0116184,0.0448616 0.0269058,0.0915542 0.0458622,0.13939117 -0.0187525,0.0476081 -0.0338361,0.0940718 -0.0452507,0.13870451 -0.0201794,-0.007096 -0.0393397,-0.0148776 -0.057073,-0.0233463 z M 0.27374905,0.94300632 C 0.24602795,0.92515321 0.23400184,0.8571742 0.2433781,0.76974017 c 0.002242,-0.0215153 0.005911,-0.0441749 0.0103954,-0.0672923 0.039951,0.0109865 0.0835712,0.0194552 0.12943334,0.0249485 0.0275174,0.0423438 0.0560538,0.0807964 0.0847942,0.11444267 -0.0664493,0.0693522 -0.12882197,0.10734714 -0.17121903,0.10734714 -0.009172,-2.2874e-4 -0.016918,-0.002289 -0.023033,-0.00618 z M 0.75723888,0.76859558 c 0.00958,0.0874343 -0.002242,0.15541318 -0.0297596,0.17349519 -0.006115,0.00412 -0.0140643,0.005951 -0.0234406,0.005951 -0.0421934,0 -0.10476976,-0.0377661 -0.17121902,-0.10666048 0.0285364,-0.0336462 0.057073,-0.0718701 0.0841826,-0.11421378 0.0460661,-0.005493 0.0896861,-0.013962 0.12963731,-0.0251774 0.004688,0.0231174 0.008357,0.0453192 0.0105993,0.0666055 z m 0.0784754,-0.15266637 c -0.0175296,0.008469 -0.0366898,0.016022 -0.0564615,0.0231174 -0.0116184,-0.0448616 -0.0269059,-0.0915542 -0.0458622,-0.13939117 0.0187525,-0.0476081 0.0338361,-0.0940718 0.0452507,-0.13870451 0.0201794,0.007096 0.0393395,0.0148776 0.0572768,0.0233463 0.0721565,0.0345617 0.11883408,0.079881 0.11883408,0.11581601 -2.037e-4,0.035935 -0.0468814,0.0814831 -0.11903788,0.11581597 z M 0.29576291,9.1438064e-4 Z" />
                    <ellipse
                        fill={color} strokeWidth="0.00215996"
                        cy="0.50011319"
                        cx="0.49979851"
                        rx="0.093151279"
                        ry="0.10460059" />
                    <path
                        fill={color} strokeWidth="0.00215996"
                        d="M 0.70281572,2.2771636e-4 Z" />
                  </g>
              </svg>
          </g>;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

}

export default Logo;