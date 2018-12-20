
// https://material.io/tools/icons/?icon=person&style=sharp
// https://www.shareicon.net/
// http://editor.method.ac/
 var graph_constants = rootAppRequire('sff-network/graph-constants');
var background_color=graph_constants.GRAPH_BACKGROUND;



// graphIcon
function visJsGraphShape(svg_icon) {
    var uri_icon = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg_icon);
    var icon_shape = {
        shape: 'image',
        image: uri_icon
    }
    var icon_json = JSON.stringify(icon_shape);
    return icon_json;
}




function close_icon(w_color) {      //wikipedia_icon


//  <svg viewBox="0 0 340 340"  xmlns="http://www.w3.org/2000/svg">

    var svg_wikipedia = `<svg viewBox="0 0 340 340"  xmlns="http://www.w3.org/2000/svg">
   <g id="svg_2">
    <path id="svg_3" fill="${w_color}" d="m215.875,169.75l114,114c13,13 13,33 0,46c-6,6 -15,10 -23,10s-17,-4 -23,-10l-114,-114l-114,114c-6,6 -15,10 -23,10s-17,-4 -23,-10c-13,-13 -13,-33 0,-46l114,-114l-114,-114c-13,-13 -13,-33 0,-46s33,-13 46,0l114,114l114,-114c13,-13 33,-13 46,0s13,33 0,46l-114,114z"/>
 </g>
</svg>`;
    return visJsGraphShape(svg_wikipedia);
}






//http://localhost:5000/?book=beyond_lies_the_wub
function rsd_icon(w_color) {



    var svg_all = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 222 222"
   version="1.1"
   id="svg18"
   sodipodi:docname="rsd_2.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <metadata
     id="metadata24">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs22">
    <pattern
       y="0"
       x="0"
       height="6"
       width="6"
       patternUnits="userSpaceOnUse"
       id="EMFhbasepattern" />
  </defs>
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1525"
     inkscape:window-height="820"
     id="namedview20"
     showgrid="false"
     inkscape:zoom="1.84375"
     inkscape:cx="-0.81355932"
     inkscape:cy="64"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg18" />
  <path
     id="path837"
     d="m 178.358,90.576267 c 0,48.079653 -39.03971,87.039363 -87.279361,87.039363 -48.15964,0 -87.1993504,-38.95971 -87.1993504,-87.039363 0,-48.07964 39.0397104,-87.0393502 87.1993504,-87.0393502 48.239651,0 87.279361,38.9597102 87.279361,87.0393502 z"
     style="fill:${w_color};fill-opacity:1;fill-rule:nonzero;stroke:none"
     inkscape:connector-curvature="0" />
  <g
     id="g916"
     transform="translate(27.118644,26.033898)">
    <circle
       cx="64.125"
       cy="63.82082"
       id="svg_7"
       r="57.541111"
       style="fill:white;stroke:#000000;stroke-width:8" />
    <path
       stroke="null"
       stroke-width="null"
       stroke-opacity="null"
       d="M 67.00002,22.8668"
       id="svg_5"
       inkscape:connector-curvature="0"
       style="opacity:0.5;fill:#3b2f0e" />
    <g
       stroke="null"
       id="g929"
       display="inline"
       style="display:inline">
      <g
         stroke="null"
         id="g7021">
        <path
           stroke="null"
           id="path7019"
           d="m 52.07851,35.72724 z m 7.43082,23.64824 0.39704,6.51811 h 10.66899 l 0.39704,-6.51811 h -11.46313 5e-5 z"
           inkscape:connector-curvature="0"
           style="fill:#0000ff" />
      </g>
      <g
         stroke="null"
         id="g7027">
        <path
           stroke="null"
           id="path7025"
           d="m 52.07851,35.72724 z m 7.9721,32.80762 0.95913,15.91327 0.0053,0.0264 c 0.06152,1.40219 0.58721,2.30646 1.35618,2.94948 0.76897,0.64302 1.83125,0.99535 2.90824,0.99535 1.07699,0 2.13922,-0.3522 2.90824,-0.99535 0.76902,-0.64316 1.29955,-1.5474 1.36133,-2.94948 v -0.0264 L 70.50816,68.53486 H 60.05053 Z"
           inkscape:connector-curvature="0"
           style="fill:#0000ff" />
      </g>
      <g
         stroke="null"
         id="g7033">
        <path
           stroke="null"
           id="path7031"
           d="m 52.07851,35.72724 z m -1.34071,41.5413 c -0.72702,0 -1.30799,0.60856 -1.29947,1.33567 v 11.93224 c 0,5.08665 3.94332,8.40159 8.02365,8.81264 2.04014,0.20593 4.17231,-0.2841 5.87346,-1.61922 1.67782,-1.31719 2.87243,-3.44844 3.18173,-6.23432 0.0053,-0.03696 0.0053,-0.07393 0.01055,-0.11353 -0.60848,0.25082 -0.82228,0.34533 -1.56761,0.23234 -0.74533,-0.11353 -0.87988,-0.50771 -1.0571,-0.50031 -0.01321,0.11881 -0.0264,0.23498 -0.04119,0.35062 -0.28035,2.05935 -1.11205,3.36406 -2.1606,4.18723 -1.10719,0.86889 -2.52607,1.21791 -3.97072,1.07243 -2.88898,-0.29096 -5.65153,-2.43767 -5.65153,-6.18792 V 78.6039 c 0.0079,-0.74322 -0.59752,-1.34703 -1.34071,-1.33539 l -2.7e-4,-2.6e-4 z"
           inkscape:connector-curvature="0"
           style="fill:#0000ff" />
      </g>
      <g
         stroke="null"
         id="g7015">
        <path
           stroke="null"
           id="path7013"
           d="m 52.07851,35.72724 z m 6.78102,13.0875 0.47955,7.92055 h 11.88096 l 0.47955,-7.92055 z"
           inkscape:connector-curvature="0"
           style="fill:#0000ff" />
      </g>
      <g
         stroke="null"
         id="g7001">
        <path
           stroke="null"
           d="m 65.27942,22.41916 c -7.30195,0 -13.20091,5.93777 -13.20091,13.30917 0,0.46097 0.02114,0.91377 0.06706,1.36128 0.04488,0.44724 0.11326,0.88658 0.20118,1.32009 0.08792,0.43351 0.19616,0.86254 0.32485,1.27891 0.12858,0.41663 0.27634,0.82453 0.44347,1.22215 0.16712,0.39789 0.35336,0.78307 0.55693,1.16037 0.20357,0.37729 0.42268,0.74452 0.66006,1.09832 0.23762,0.35431 0.49401,0.69753 0.76316,1.02598 0.26938,0.32897 0.55172,0.64261 0.85085,0.94386 0.2991,0.30124 0.61244,0.59009 0.93851,0.86097 0.08897,0.07393 0.18719,0.13993 0.27843,0.21121 0.09795,-0.0264 0.19828,-0.03696 0.2991,-0.03696 h 15.64005 c 0.09901,0.0011 0.19749,0 0.29394,0.03696 0.09162,-0.07129 0.18877,-0.13729 0.27845,-0.21121 0.32607,-0.27088 0.63936,-0.55973 0.93851,-0.86097 0.29913,-0.30124 0.58149,-0.61491 0.85085,-0.94386 0.2693,-0.32843 0.52608,-0.67192 0.76316,-1.02598 0.23762,-0.35404 0.45649,-0.72102 0.66006,-1.09832 0.20356,-0.37754 0.3898,-0.76248 0.55693,-1.16037 0.16712,-0.39761 0.31462,-0.80527 0.44344,-1.22215 0.12884,-0.41715 0.23682,-0.84618 0.32487,-1.27891 0.08792,-0.43299 0.15603,-0.87179 0.20118,-1.32009 0.0433,-0.4512 0.06706,-0.90216 0.06706,-1.36128 0,-7.3714 -5.89897,-13.30917 -13.20091,-13.30917 z"
           id="path6999"
           inkscape:connector-curvature="0"
           style="fill:#0000ff" />
      </g>
      <g
         stroke="null"
         id="g7007">
        <path
           stroke="null"
           d="m 59.90629,25.05907 c 0.03089,-0.0011 0.06178,-0.0011 0.09267,0 0.72906,0 1.32009,0.59114 1.32009,1.32009 0,0.72895 -0.59104,1.32009 -1.32009,1.32009 -0.72906,0 -1.32009,-0.59114 -1.32009,-1.32009 -0.0016,-0.69435 0.53468,-1.27125 1.2273,-1.32009 h 1.3e-4 z m 5.28037,0 c 0.03089,-0.0011 0.06178,-0.0011 0.09267,0 0.72906,0 1.32009,0.59114 1.32009,1.32009 0,0.72895 -0.59104,1.32009 -1.32009,1.32009 -0.72906,0 -1.32009,-0.59114 -1.32009,-1.32009 -0.0016,-0.69435 0.53468,-1.27125 1.2273,-1.32009 h 1.3e-4 z m 5.28037,0 c 0.03089,-0.0011 0.06178,-0.0011 0.09267,0 0.72906,0 1.32009,0.59114 1.32009,1.32009 0,0.72895 -0.59104,1.32009 -1.32009,1.32009 -0.72906,0 -1.32009,-0.59114 -1.32009,-1.32009 -0.0016,-0.69435 0.53468,-1.27125 1.2273,-1.32009 h 1.3e-4 z m -13.20091,3.96014 c 0.03089,-0.0011 0.06178,-0.0011 0.09267,0 0.72906,0 1.32009,0.59114 1.32009,1.32009 0,0.72895 -0.59104,1.32009 -1.32009,1.32009 -0.72906,0 -1.32009,-0.59114 -1.32009,-1.32009 -0.0016,-0.69435 0.53468,-1.27125 1.2273,-1.32009 h 1.3e-4 z m 5.28037,0 c 0.03089,-0.0011 0.06178,-0.0011 0.09267,0 0.72906,0 1.32009,0.59114 1.32009,1.32009 0,0.72895 -0.59104,1.32009 -1.32009,1.32009 -0.72906,0 -1.32009,-0.59114 -1.32009,-1.32009 -0.0016,-0.69435 0.53468,-1.27125 1.2273,-1.32009 h 1.3e-4 z m 5.28037,0 c 0.03089,-0.0011 0.06178,-0.0011 0.09267,0 0.72906,0 1.32009,0.59114 1.32009,1.32009 0,0.72895 -0.59104,1.32009 -1.32009,1.32009 -0.72906,0 -1.32009,-0.59114 -1.32009,-1.32009 -0.0016,-0.69435 0.53468,-1.27125 1.2273,-1.32009 h 1.3e-4 z m 5.28037,0 c 0.03089,-0.0011 0.06178,-0.0011 0.09267,0 0.72906,0 1.32009,0.59114 1.32009,1.32009 0,0.72895 -0.59104,1.32009 -1.32009,1.32009 -0.72906,0 -1.32009,-0.59114 -1.32009,-1.32009 -0.0016,-0.69435 0.53468,-1.27125 1.2273,-1.32009 h 1.3e-4 z"
           id="path7005"
           inkscape:connector-curvature="0"
           style="fill:#ffffff" />
      </g>
    </g>
  </g>
</svg>



`;



    return visJsGraphShape(svg_all);
}


function rsd_video(w_color) {



    var svg_all = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="900"
   height="900"
   version="1.1"
   id="svg48"
   sodipodi:docname="video_2.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <defs
     id="defs52" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1772"
     inkscape:window-height="848"
     id="namedview50"
     showgrid="false"
     units="px"
     width="666in"
     inkscape:zoom="0.37820513"
     inkscape:cx="-223.02542"
     inkscape:cy="312"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="g83" />
  <metadata
     id="metadata1700">image/svg+xmlimage/svg+xmlimage/svg+xml<rdf:RDF>
  <cc:Work
     rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type
       rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
    <dc:title></dc:title>
  </cc:Work>
</rdf:RDF>
</metadata>
  <path
     id="path57"
     d="m 864.46086,463.62485 c 0,227.25073 -184.65971,411.43413 -412.29214,411.43413 -227.72787,0 -412.292274,-184.1834 -412.292274,-411.43413 0,-227.25188 184.564404,-411.435296 412.292274,-411.435296 227.63243,0 412.29214,184.183416 412.29214,411.435296 z"
     style="display:inline;fill:${w_color};fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.19105399"
     inkscape:connector-curvature="0" />
  <g
     id="g83"
     transform="translate(-843.45763,357.15254)"
     style="display:inline">
    <g
       transform="translate(999.45766,-210.71232)"
       style="display:inline;opacity:0.98999999"
       id="g3751"
       display="inline">
      <title
         id="title29">Layer 1</title>
      <g
         style="display:inline"
         stroke="null"
         id="svg_9"
         display="inline">
        <g
           stroke="null"
           id="svg_10">
          <path
             inkscape:connector-curvature="0"
             stroke="null"
             id="svg_11"
             d="m 10.48937,63.26275 c 0,-22.0918 17.9082,-40 40,-40 h 500 c 22.0918,0 40,17.9082 40,40 v 500 c 0,22.0918 -17.9082,40 -40,40 h -500 c -22.0918,0 -40,-17.9082 -40,-40 z" />
        </g>
      </g>
      <g
         style="display:inline"
         stroke="null"
         id="svg_14"
         display="inline">
        <path
           style="fill:#ffffff"
           inkscape:connector-curvature="0"
           stroke="null"
           d="m 42.48938,78.58094 c 0,-12.87783 10.43944,-23.31818 23.31818,-23.31818 h 466.36362 c 12.87783,0 23.31818,10.44035 23.31818,23.31818 v 466.36363 c 0,12.87874 -10.44035,23.31818 -23.31818,23.31818 H 65.80756 c -12.87874,0 -23.31818,-10.43944 -23.31818,-23.31818 z"
           id="svg_15" />
        <path
           style="fill:#ffffff"
           inkscape:connector-curvature="0"
           stroke="null"
           d="M 298.98937,311.76275"
           id="svg_16" />
      </g>
    </g>
    <g
       style="display:inline;opacity:0.98999999"
       transform="matrix(1.416492,0,0,1.416492,860.16494,-272.11032)"
       id="g3758"
       display="inline">
      <title
         id="title38">Layer 1</title>
      <g
         stroke="null"
         id="g5360">
        <g
           stroke="null"
           id="g4167"
           transform="matrix(9.6803165,0,0,9.6803165,796.11203,-1375.3257)">
          <path
             style="fill:#ff0000;fill-rule:nonzero"
             inkscape:connector-curvature="0"
             stroke="null"
             id="path4156"
             d="m -50.43373,156.87287 c 0,0 -10.71028,1e-5 -13.39842,0.69851 -1.43932,0.40216 -2.62449,1.58734 -3.02666,3.04783 -0.6985,2.68814 -0.69851,8.25506 -0.69851,8.25506 0,0 2e-5,5.58805 0.69851,8.23388 0.40216,1.46047 1.56617,2.62449 3.02666,3.02666 2.70931,0.71966 13.39842,0.71969 13.39842,0.71969 0,0 10.73152,-1e-5 13.4196,-0.69851 1.4605,-0.40216 2.62448,-1.54502 3.00548,-3.02666 0.71967,-2.667 0.71969,-8.23388 0.71969,-8.23388 0,0 0.02115,-5.58809 -0.71969,-8.27623 -0.381,-1.46049 -1.54498,-2.62448 -3.00548,-3.00548 -2.68808,-0.74083 -13.4196,-0.74086 -13.4196,-0.74086 z m -3.40784,6.85804 8.91121,5.14336 -8.91121,5.12219 z" />
        </g>
      </g>
    </g>
  </g>
</svg>

`;



    return visJsGraphShape(svg_all);
}










































function book_iconOLD(hover_color) {

 var svg_all = `<svg width="89.814117" height="89.814117" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>Layer 1</title>
  <circle fill="${background_color}" stroke-width="1.85746" stroke-miterlimit="4" r="44.90706" cy="44.90706" cx="44.90706" id="path1080"/>
  <path stroke="null" fill="${hover_color}" stroke-width="1.5" id="svg_5" d="m70.9683,22.62666l0,-6.99996l-26.74986,6.99996l26.74986,0z" stroke-opacity="null"/>
  <rect stroke="null" fill="${hover_color}" stroke-width="1.5" id="svg_6" height="44.87477" width="62.49968" y="21.16274" x="12.38722" fill-opacity="null" stroke-opacity="null"/>
  <path id="svg_2" d="m76.46656,24.32096l0,-4.172l-4.418,0l0,-5.26l-28.335,5.26l-32.534,0l0,4.172l-2.392,0l0,44.879l70.074,0l0,-44.879l-2.395,0zm-62.954,0l0,-1.836l29.142,0l0,1.836l0,40.792l-29.142,0l0,-40.792zm43.004,-4.172l13.194,-2.45l0,2.45l0,1.168l0,1.168l0,1.836l0,35.96l-24.72,4.59l0,-40.55l0,-1.836l0,-0.196l5.234,-0.972l6.292,-1.168zm17.615,4.172l0,40.792l-17.615,0l15.53,-2.879l0,-37.911l0,-1.836l2.085,0l0,1.834zm-25.79,29.992l-0.616,-2.254l18.477,-5.021l0.614,2.253l-18.475,5.022zm-0.212,6.3l-0.614,-2.256l18.477,-5.021l0.614,2.254l-18.477,5.023zm0.463,-30.296l-0.63,-2.249l13.436,-3.747l4.58,-1.278l0.356,1.278l0.267,0.972l-18.009,5.024zm0,5.962l-0.63,-2.25l18.016,-5.022l0.63,2.249l-18.016,5.023zm-0.033,5.958l-0.632,-2.25l18.055,-5.023l0.627,2.25l-18.05,5.023zm0,5.963l-0.632,-2.25l18.055,-5.021l0.627,2.25l-18.05,5.021zm-31.802,4.413l22.896,0l0,2.336l-22.896,0l0,-2.336zm-0.211,6.31l22.896,0l0,2.336l-22.896,0l0,-2.336zm22.894,-16.044l-22.471,0l0,-2.335l22.471,0l0,2.335zm0,5.963l-22.471,0l0,-2.336l22.471,0l0,2.336z"/>
 </g>
</svg>
`;

    return visJsGraphShape(svg_all);
}













//  ${background_color}



























function filter_icon(w_color) {   
    var svg_filter = `<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="64"
   height="64"
   version="1.1"
   id="svg13"
   sodipodi:docname="fitler_3_gr.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <metadata
     id="metadata19">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs17" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1018"
     id="namedview15"
     showgrid="false"
     inkscape:zoom="10.59984"
     inkscape:cx="12.784783"
     inkscape:cy="25.094568"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg13" />
  <circle
     id="path1080"
     cx="31.511728"
     cy="30.970972"
     r="28.769915"
     stroke-miterlimit="4"
     style="display:inline;fill:${w_color};stroke-width:1.18999028;stroke-miterlimit:4" />
  <g
     display="inline"
     id="g15"
     style="display:inline"
     transform="matrix(1.7651971,0,0,1.7651971,2.2092126,13.100938)">
    <title
       id="title7">Layer 1</title>
    <rect
       id="svg_1"
       height="12.41678"
       width="26.250481"
       y="3.8541801"
       x="3.6667299"
       style="fill:#ffffff;stroke:#666666;stroke-width:0.75" />
    <text
       transform="matrix(0.56816804,0,0,0.56816804,2.9755921,1.8960122)"
       font-size="12px"
       id="svg_2"
       y="18.23909"
       x="5.3204298"
       stroke-opacity="null"
       style="font-size:12px;font-family:Helvetica, Arial, sans-serif;text-anchor:start;fill:#666666;stroke:#000000;stroke-width:0">Filter ...</text>
  </g>
</svg>

`;
       return visJsGraphShape(svg_filter);
}


function filter_grow(w_color) {   
    var svg_filter = `<svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>background</title>
  <rect x="-1" y="-1" width="5" height="5.33333" id="canvas_background" fill="none"/>
 </g>

 <g display="inline" id="g15">
  <title>Layer 1</title>
  <rect fill="${background_color}" id="svg_5" height="46.50019" width="270.50113" y="-1.03147" x="-0.50067"/>
  <rect stroke="#666666" stroke-width="0.75" fill="#cccccc" id="svg_1" height="12.41678" width="9.87555" y="3.85418" x="3.66673"/>
  <text stroke="#666666" font-family="Helvetica, Arial, sans-serif" text-anchor="start" fill="#000000" stroke-width="0"
   font-size="12px" id="svg_2" y="14.07907" x="5.14378">+</text>
 </g>
</svg>`;
       return visJsGraphShape(svg_filter);
}
function filter_shrink(w_color) {   
    var svg_filter = `<svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>background</title>
  <rect x="-1" y="-1" width="5" height="5.33333" id="canvas_background" fill="none"/>
 </g>

 <g display="inline" id="g15">
  <title>Layer 1</title>
  <rect fill="${background_color}" id="svg_5" height="46.50019" width="270.50113" y="-1.03147" x="-0.50067"/>
  <rect stroke="#666666" stroke-width="0.75" fill="#cccccc" id="svg_1" height="12.41678" width="9.87555" y="3.85418" x="3.66673"/>
  <text stroke="#666666" font-family="Helvetica, Arial, sans-serif" text-anchor="start" fill="#000000" stroke-width="0"
   font-size="12px" id="svg_2" y="13.76657" x="6.64377">-</text>
 </g>
</svg>`;
       return visJsGraphShape(svg_filter);
}

function nothing_icon() {
    var svg_all = `
<svg viewBox="0 0 130 130"  xmlns="http://www.w3.org/2000/svg">
 <g id="g916">
  <title>Layer 1</title>
 </g>
</svg>
`;
    return visJsGraphShape(svg_all);
}





function arrow_icon(w_color) {

 var svg_all = `
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg15"
   version="1.1"
   height="90.00000000000001"
   width="90.00000000000001">
  <defs
     id="defs19" />
  <metadata
     id="metadata20">image/svg+xml<rdf:RDF>
  <cc:Work
     rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type
       rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
    <dc:title></dc:title>
  </cc:Work>
</rdf:RDF>
</metadata>
  <g
     style="display:inline"
     id="g12"
     display="inline">
    <title
       id="title8">Layer 1</title>
    <circle
       style="display:inline;stroke-width:1.85746002;stroke-miterlimit:4"
       stroke-miterlimit="4"
       r="44.907059"
       cy="44.907059"
       cx="44.907059"
       id="path1080"
       fill="${w_color}" />
    <g
       style="display:inline"
       id="svg_1"
       stroke="null"
       display="inline">
      <path
         style="fill:#ffffff;stroke-width:0.84917003"
         id="svg_2-9"
         d="M 75.79714,53.09884 31.12601,15.61536 v 58.31372 l 11.95828,-14.35737 8.34046,17.88633 14.02784,-6.5413 -8.34046,-17.88619 18.68501,0.06827 z"
         stroke="null" />
      <path
         style="fill:#000000"
         id="svg_2"
         d="M 80.95055,54.0157 28.34482,9.87431 V 78.54586 L 42.42717,61.6383 52.24908,82.70165 68.76858,74.99847 58.94667,53.93529 80.95055,54.01567 Z M 61.50175,72.35356 54.89402,75.43488 43.74097,51.51696 33.81317,63.43663 V 21.60081 L 65.86098,48.49232 50.34854,48.43563 61.50176,72.35355 Z"
         stroke="null" />
    </g>
  </g>
</svg>


`;

    return visJsGraphShape(svg_all);
}




function book_icon(hover_color) {

 var svg_all = `<svg width="89.814117" height="89.814117" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>Layer 1</title>
  <circle fill="${hover_color}" stroke-width="1.85746" stroke-miterlimit="4" r="44.90706" cy="44.90706" cx="44.90706" id="path1080"/>
  <path stroke="null" fill="white" stroke-width="1.5" id="svg_5" d="m70.9683,22.62666l0,-6.99996l-26.74986,6.99996l26.74986,0z" stroke-opacity="null"/>
  <rect stroke="null" fill="white" stroke-width="1.5" id="svg_6" height="44.87477" width="62.49968" y="21.16274" x="12.38722" fill-opacity="null" stroke-opacity="null"/>
  <path id="svg_2" d="m76.46656,24.32096l0,-4.172l-4.418,0l0,-5.26l-28.335,5.26l-32.534,0l0,4.172l-2.392,0l0,44.879l70.074,0l0,-44.879l-2.395,0zm-62.954,0l0,-1.836l29.142,0l0,1.836l0,40.792l-29.142,0l0,-40.792zm43.004,-4.172l13.194,-2.45l0,2.45l0,1.168l0,1.168l0,1.836l0,35.96l-24.72,4.59l0,-40.55l0,-1.836l0,-0.196l5.234,-0.972l6.292,-1.168zm17.615,4.172l0,40.792l-17.615,0l15.53,-2.879l0,-37.911l0,-1.836l2.085,0l0,1.834zm-25.79,29.992l-0.616,-2.254l18.477,-5.021l0.614,2.253l-18.475,5.022zm-0.212,6.3l-0.614,-2.256l18.477,-5.021l0.614,2.254l-18.477,5.023zm0.463,-30.296l-0.63,-2.249l13.436,-3.747l4.58,-1.278l0.356,1.278l0.267,0.972l-18.009,5.024zm0,5.962l-0.63,-2.25l18.016,-5.022l0.63,2.249l-18.016,5.023zm-0.033,5.958l-0.632,-2.25l18.055,-5.023l0.627,2.25l-18.05,5.023zm0,5.963l-0.632,-2.25l18.055,-5.021l0.627,2.25l-18.05,5.021zm-31.802,4.413l22.896,0l0,2.336l-22.896,0l0,-2.336zm-0.211,6.31l22.896,0l0,2.336l-22.896,0l0,-2.336zm22.894,-16.044l-22.471,0l0,-2.335l22.471,0l0,2.335zm0,5.963l-22.471,0l0,-2.336l22.471,0l0,2.336z"/>
 </g>
</svg>
`;

    return visJsGraphShape(svg_all);
}

//http://localhost:5000/?book=the_zap_gun
function podcast_icon(w_color) {
    var svg_all = `

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   viewBox="0 0 222 222"
   version="1.1"
   id="svg11"
   sodipodi:docname="pod_cast_2.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <metadata
     id="metadata17">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs15" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1460"
     inkscape:window-height="961"
     id="namedview13"
     showgrid="false"
     inkscape:zoom="0.97531385"
     inkscape:cx="65"
     inkscape:cy="160.89877"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg11" />
  <ellipse
     id="svg_circle"
     cx="95.359909"
     cy="91.4701"
     style="fill:${w_color};stroke-width:2.37427378"
     rx="87.234741"
     ry="87.056602" />
  <g
     id="g916"
     transform="translate(31.78464,25.632774)">
    <title
       id="title2">Layer 1</title>
    <path
       stroke="null"
       stroke-width="null"
       stroke-opacity="null"
       d="M 67.00002,22.8668"
       id="svg_5"
       inkscape:connector-curvature="0"
       style="opacity:0.5;fill:#3b2f0e" />
    <circle
       cx="64.125"
       cy="63.82082"
       id="svg_7"
       r="57.541111"
       style="fill:#ffffff;stroke:#000000;stroke-width:8" />
    <g
       stroke="null"
       id="g929"
       display="inline"
       style="display:inline">
      <path
         stroke="null"
         d="m 50.04903,60.9467 h 9.06721 c 1.36008,0 2.2668,-0.90672 2.2668,-2.2668 0,-1.36008 -0.90672,-2.2668 -2.2668,-2.2668 h -9.06721 v -4.53361 h 9.06721 c 1.36008,0 2.2668,-0.90672 2.2668,-2.2668 0,-1.36008 -0.90672,-2.2668 -2.2668,-2.2668 h -9.06721 v -4.53361 h 9.06721 c 1.36008,0 2.2668,-0.90672 2.2668,-2.2668 0,-1.36008 -0.90672,-2.2668 -2.2668,-2.2668 H 50.04903 V 35.7852 c 0,-8.16049 6.57373,-14.73422 14.73422,-14.73422 8.16049,0 14.73422,6.57373 14.73422,14.73422 v 2.49348 h -9.06721 c -1.36008,0 -2.2668,0.90672 -2.2668,2.2668 0,1.1334 1.1334,2.2668 2.2668,2.2668 h 9.06721 v 4.53361 h -9.06721 c -1.36008,0 -2.2668,0.90672 -2.2668,2.2668 0,1.1334 1.1334,2.2668 2.2668,2.2668 h 9.06721 v 4.53361 h -9.06721 c -1.36008,0 -2.2668,0.90672 -2.2668,2.2668 0,1.1334 1.1334,2.2668 2.2668,2.2668 h 9.06721 v 2.49348 c 0,8.16049 -6.57373,14.73422 -14.73422,14.73422 -8.16049,0 -14.73422,-6.57373 -14.73422,-14.73422 z"
         id="svg_2"
         inkscape:connector-curvature="0"
         style="fill:#ffffff" />
      <path
         stroke="null"
         d="m 64.78325,82.708 c 10.65397,0 19.26782,-8.61385 19.26782,-19.26782 V 35.78519 c 0,-10.65397 -8.61385,-19.26782 -19.26782,-19.26782 -10.65397,0 -19.26782,8.61385 -19.26782,19.26782 v 27.65499 c 0,10.65397 8.61385,19.26782 19.26782,19.26782 z M 50.04903,60.9467 h 9.06721 c 1.36008,0 2.2668,-0.90672 2.2668,-2.2668 0,-1.36008 -0.90672,-2.2668 -2.2668,-2.2668 h -9.06721 v -4.53361 h 9.06721 c 1.36008,0 2.2668,-0.90672 2.2668,-2.2668 0,-1.36008 -0.90672,-2.2668 -2.2668,-2.2668 h -9.06721 v -4.53361 h 9.06721 c 1.36008,0 2.2668,-0.90672 2.2668,-2.2668 0,-1.36008 -0.90672,-2.2668 -2.2668,-2.2668 H 50.04903 V 35.7852 c 0,-8.16049 6.57373,-14.73422 14.73422,-14.73422 8.16049,0 14.73422,6.57373 14.73422,14.73422 v 2.49348 h -9.06721 c -1.36008,0 -2.2668,0.90672 -2.2668,2.2668 0,1.1334 1.1334,2.2668 2.2668,2.2668 h 9.06721 v 4.53361 h -9.06721 c -1.36008,0 -2.2668,0.90672 -2.2668,2.2668 0,1.1334 1.1334,2.2668 2.2668,2.2668 h 9.06721 v 4.53361 h -9.06721 c -1.36008,0 -2.2668,0.90672 -2.2668,2.2668 0,1.1334 1.1334,2.2668 2.2668,2.2668 h 9.06721 v 2.49348 c 0,8.16049 -6.57373,14.73422 -14.73422,14.73422 -8.16049,0 -14.73422,-6.57373 -14.73422,-14.73422 z"
         id="path6084"
         inkscape:connector-curvature="0"
         style="fill:#008000" />
      <path
         stroke="null"
         d="m 93.11829,63.2135 c 0,-1.1334 -1.1334,-2.2668 -2.2668,-2.2668 -1.1334,0 -2.2668,1.1334 -2.2668,2.2668 0,13.14746 -10.65397,23.80143 -23.80143,23.80143 -13.14746,0 -23.80143,-10.65397 -23.80143,-23.80143 0,-1.1334 -1.1334,-2.2668 -2.2668,-2.2668 -1.1334,0 -2.2668,1.1334 -2.2668,2.2668 0,14.9609 11.5607,27.20164 26.06823,28.33503 v 11.10733 H 47.78224 c -1.1334,0 -2.2668,0.90672 -2.2668,2.2668 0,1.36008 1.1334,2.2668 2.2668,2.2668 h 34.00205 c 1.1334,0 2.2668,-0.90672 2.2668,-2.2668 0,-1.36008 -1.1334,-2.2668 -2.2668,-2.2668 H 67.05007 V 91.54853 C 81.55761,90.41513 93.1183,78.17439 93.1183,63.2135 v 0 z"
         id="svg_3"
         inkscape:connector-curvature="0"
         style="fill:#008000" />
    </g>
  </g>
</svg>

`;
    return visJsGraphShape(svg_all);
}
function pdf_icon(hover_color) {     // interior_color, base_color
    var svg_all = `

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg11"
   version="1.1"
   viewBox="0 0 720 720">
  <ellipse
     ry="345.43497"
     rx="346.14182"
     style="fill:${hover_color};stroke-width:9.42096519"
     cy="344.28812"
     cx="344.28812"
     id="svg_circle" />
  <g
     transform="translate(56.440678,-16.932203)"
     id="g9">
    <title
       id="title2">Layer 1</title>
    <g
       id="svg_5">
      <path
         style="fill:#000000"
         id="svg_1"
         d="M 496.7,198.72 425.3,127.28 C 409.7,111.73 379,99 357,99 H 117 c -22,0 -40,18 -40,40 v 432 c 0,22 18,40 40,40 h 368 c 22,0 40,-18 40,-40 V 267 c 0,-22 -12.7,-52.7 -28.3,-68.28 z" />
      <path
         style="fill:#ffffff"
         id="svg_2"
         d="m 493,571 c 0,4.3 -3.7,8 -8,8 H 117 c -4.34,0 -8,-3.7 -8,-8 V 139 c 0,-4.34 3.66,-8 8,-8 h 240 c 2.4,0 5.1,0.3 8,0.85 v 127.2 h 127.1 c 0.6,2.9 0.9,5.6 0.9,8 v 304 z" />
      <path
         style="fill:#ff0000"
         id="svg_3"
         d="m 459.5,415.8 c -2.1,1.3 -8.1,2.1 -11.9,2.1 -12.4,0 -27.6,-5.7 -49.1,-14.9 8.3,-0.6 15.8,-0.9 22.6,-0.9 12.4,0 16,0 28.2,3.1 12.1,3 12.2,9.3 10.2,10.6 z m -215.1,1.9 c 4.8,-8.4 9.7,-17.3 14.7,-26.8 12.2,-23.1 20,-41.3 25.7,-56.2 11.5,20.9 25.8,38.6 42.5,52.8 2.1,1.8 4.3,3.5 6.7,5.3 -34.1,6.8 -63.6,15 -89.6,24.9 z m 39.8,-218.9 c 6.8,0 10.7,17.06 11,33.16 0.3,16 -3.4,27.2 -8.1,35.6 -3.9,-12.4 -5.7,-31.8 -5.7,-44.5 0,0 -0.3,-24.26 2.8,-24.26 z M 150.8,506 c 3.9,-10.5 19.1,-31.3 41.6,-49.8 1.4,-1.1 4.9,-4.4 8.1,-7.4 -23.5,37.6 -39.3,52.5 -49.7,57.2 z M 466,393.7 c -6.8,-6.7 -22,-10.2 -45,-10.5 -15.6,-0.2 -34.3,1.2 -54.1,3.9 -8.8,-5.1 -17.9,-10.6 -25.1,-17.3 -19.2,-18 -35.2,-42.9 -45.2,-70.3 0.6,-2.6 1.2,-4.8 1.7,-7.1 0,0 10.8,-61.5 7.9,-82.3 -0.4,-2.9 -0.6,-3.7 -1.4,-5.9 l -0.9,-2.5 c -2.9,-6.76 -8.7,-13.96 -17.8,-13.57 l -5.3,-0.17 h -0.1 c -10.1,0 -18.4,5.17 -20.5,12.84 -6.6,24.3 0.2,60.5 12.5,107.4 l -3.2,7.7 c -8.8,21.4 -19.8,43 -29.5,62 l -1.3,2.5 c -10.2,20 -19.5,37 -27.9,51.4 l -8.7,4.6 c -0.6,0.4 -15.5,8.2 -19,10.3 -29.6,17.7 -49.28,37.8 -52.54,53.8 -1.04,5 -0.26,11.5 5.01,14.6 l 8.4,4.2 c 3.63,1.8 7.53,2.7 11.43,2.7 21.1,0 45.6,-26.2 79.3,-85.1 39,-12.7 83.4,-23.3 122.3,-29.1 29.6,16.7 66,28.3 89,28.3 4.1,0 7.6,-0.4 10.5,-1.2 4.4,-1.1 8.1,-3.6 10.4,-7.1 4.4,-6.7 5.4,-15.9 4.1,-25.4 -0.3,-2.8 -2.6,-6.3 -5,-8.7 z" />
      <path
         style="fill:#ffffff"
         id="svg_4"
         d="m 474.1,221.3 c 1.6,1.6 3.1,3.5 4.6,5.7 H 397 v -81.73 c 2.2,1.52 4.1,3.08 5.7,4.64 z" />
    </g>
  </g>
</svg>
`;
    return visJsGraphShape(svg_all);
}

function wikipedia_icon(hover_color) {      //wikipedia_icon
    var svg_wikipedia = `<svg width="720" height="710" xmlns="http://www.w3.org/2000/svg">
    
    
    
  <ellipse
     ry="345.43497"
     rx="346.14182"
     style="fill:${hover_color};stroke-width:9.42096519"
     cy="351.08972"
     cx="360.60547"
     id="svg_circle" />
  <g
     transform="translate(75.211864,-18.050847)"
     id="g9">
    <title
       id="title3">Layer 1</title>
    <path
       style="fill:#ff7f00;stroke-width:3.86862993"
       stroke="null"
       id="svg_1"
       d="m 158.82159,150.85098 127.84609,-116.88062 125.22507,119.68452 -63.26778,-0.70098 -1.31682,118.85174 -126.53556,-1.40196 1.31682,-118.85173 -63.2678,-0.70098 h -2e-5 z"
       stroke-opacity="null" />
    <path
       style="fill:#ffffff"
       id="path6993"
       stroke-opacity="null"
       d="M 267.87,688.3 53.5,290.79 l 449.07,0.14443 z" />
    <path
       style="fill:#1a1a1a"
       id="path6995"
       d="m 480.14,270.99 -399.48,0.0513 c -19.62,-0.005 -33.519,6.8953 -40.17,18.074 -6.7277,11.307 -6.029,26.994 3.6881,44.331 l 193.14,342.87 c 19.324,34.473 50.076,36.903 68.84,5.5166 l 211.59,-353.93 c 18.698,-31.427 1.8542,-56.907 -37.609,-56.916 z M 271.6936,673.6424 c -1.4251,-1.1771 -4.0373,-3.8435 -7.0913,-9.3029 l -193.14,-342.88 c -4.6206,-8.2422 -4.7311,-13.747 -3.4199,-15.95 1.3058,-2.1946 6.1613,-4.7641 15.525,-4.7586 l 399.47,-0.0641 c 5.6708,0.008 9.1303,0.79884 10.984,1.4186 -0.27527,1.7671 -1.129,4.915 -3.8198,9.4161 l -211.59,353.93 c -2.9596,4.986 -5.5235,7.2298 -6.9219,8.1881 z" />
    <path
       style="fill:#ff00ff;fill-rule:evenodd;stroke-width:2.8197999"
       stroke="null"
       d="m 449.8798,334.35358 c 0,1.2401 -0.40257,2.3592 -1.17678,3.38757 -0.80517,0.99813 -1.64132,1.51231 -2.60136,1.51231 -7.71111,0.72592 -14.05963,3.1456 -18.95264,7.28933 -4.92395,4.11347 -9.97181,12.00773 -15.20547,23.62225 l -79.89842,175.85112 c -0.52646,1.6333 -1.98195,2.44994 -4.3975,2.44994 -1.88909,0 -3.34458,-0.81664 -4.39752,-2.44994 l -44.81125,-91.52485 -51.53138,91.52485 c -1.05291,1.6333 -2.50843,2.44994 -4.3975,2.44994 -2.29166,0 -3.80912,-0.81664 -4.55236,-2.44994 L 139.45278,370.16504 c -4.893,-10.91888 -10.06471,-18.54091 -15.51514,-22.8661 -5.41947,-4.32521 -13.00672,-7.01711 -22.69983,-8.04549 -0.83614,0 -1.64132,-0.42343 -2.35359,-1.30058 -0.74324,-0.84688 -1.11486,-1.84502 -1.11486,-2.96411 0,-2.87339 0.83615,-4.29496 2.50844,-4.29496 6.99885,0 14.30738,0.30247 21.95658,0.9074 7.09176,0.63515 13.78093,0.93762 20.03653,0.93762 6.37949,0 13.90481,-0.30247 22.57595,-0.93762 9.07375,-0.60492 17.12553,-0.9074 24.12436,-0.9074 1.6723,0 2.50844,1.42158 2.50844,4.29496 0,2.84313 -0.52646,4.26469 -1.54841,4.26469 -6.99885,0.5142 -12.51124,2.26846 -16.53713,5.20236 -4.02588,2.96411 -6.03882,6.83562 -6.03882,11.64476 0,2.44994 0.83615,5.5048 2.50844,9.16457 l 64.87875,143.09457 36.82139,-67.93286 -34.31297,-70.26181 c -6.1627,-12.52192 -11.24152,-20.62789 -15.20547,-24.25742 -3.96395,-3.59929 -9.9718,-5.83751 -18.02357,-6.65416 -0.74326,0 -1.42456,-0.42343 -2.10587,-1.30058 -0.6813,-0.84688 -1.02196,-1.84502 -1.02196,-2.96411 0,-2.87339 0.71229,-4.29496 2.19877,-4.29496 6.99885,0 13.40931,0.30247 19.26232,0.9074 5.63624,0.63515 11.64411,0.93762 18.02361,0.93762 6.25561,0 12.88284,-0.30247 19.88169,-0.93762 7.21562,-0.60492 14.30739,-0.9074 21.30625,-0.9074 1.67229,0 2.50844,1.42158 2.50844,4.29496 0,2.84313 -0.49551,4.26469 -1.54844,4.26469 -13.99768,0.93764 -20.99656,4.80914 -20.99656,11.64477 0,3.05488 1.61035,7.80351 4.86203,14.2157 l 22.69983,45.00627 22.57595,-41.165 c 3.1278,-5.80727 4.70719,-10.70715 4.70719,-14.69965 0,-9.3763 -6.99886,-14.36692 -20.99654,-15.00209 -1.26972,0 -1.88908,-1.42156 -1.88908,-4.26469 0,-1.02837 0.30966,-1.99626 0.92904,-2.90364 0.65034,-0.93764 1.2697,-1.39133 1.88906,-1.39133 5.01688,0 11.17961,0.30247 18.48812,0.9074 6.99886,0.63515 12.75899,0.93762 17.24939,0.93762 3.22071,0 7.98985,-0.27222 14.24547,-0.7864 7.9279,-0.69566 14.58609,-1.05862 19.91266,-1.05862 1.23873,0 1.8581,1.20984 1.8581,3.65978 0,3.26659 -1.14584,4.89988 -3.4375,4.89988 -8.14469,0.81665 -14.70998,3.02462 -19.66492,6.59366 -4.95495,3.56905 -11.14863,11.67502 -18.55006,24.31792 l -30.10127,54.35232 40.75438,81.08993 60.17157,-136.6521 c 2.07488,-4.99062 3.1278,-9.58803 3.1278,-13.762 0,-10.01148 -6.99885,-15.30456 -20.99656,-15.93973 -1.26971,0 -1.88908,-1.42156 -1.88908,-4.26469 0,-2.87339 0.92905,-4.29496 2.81811,-4.29496 5.10979,0 11.17961,0.30247 18.17845,0.9074 6.4724,0.63515 11.92282,0.93762 16.28936,0.93762 4.61429,0 9.94086,-0.30247 15.97969,-0.93762 6.28657,-0.60492 11.92282,-0.9074 16.9397,-0.9074 1.4555,0 2.19874,1.20984 2.19874,3.65978 z"
       id="path108" />
  </g>
</svg>

`;
    return visJsGraphShape(svg_wikipedia);
}



function author_icon(hover_color) {
    var svg_author = `
<svg width="73.408233" height="73.408233" xmlns="http://www.w3.org/2000/svg">

 <g>
  <title>Layer 1</title>
  <g id="g54">
   <circle fill="${hover_color}" id="svg_circle" cx="37.03092" cy="36.70412" r="36.70412"/>
   <path fill="black" id="svg_head"  d="m65.29311,27.68823c-0.20009,4.83722 -6.86923,13.64134 -6.86923,13.64134c-5.32094,7.64436 -2.70807,13.54615 -2.70807,13.54615c-10.74095,2.41667 -19.54702,18.09003 -19.54702,18.09003c-0.39242,-2.31759 -5.55017,-12.1183 -5.55017,-12.1183c-2.15829,-2.71195 -5.77941,-1.76004 -7.73566,-1.51915c-5.60846,0.6877 -7.00134,-0.96162 -7.00134,-0.96162c-1.22582,-0.74792 -0.64496,-3.86977 -0.64496,-3.86977c0.45069,-1.61629 -0.28363,-2.40501 -0.7421,-3.03443c-1.22776,-1.71926 -0.5148,-2.5138 -0.5148,-2.5138c0.38659,-0.48761 0.12821,-0.74598 0.12821,-0.74598c-1.35792,-0.44876 -1.45311,-1.18891 -1.45311,-1.18891l0.03497,-2.4866c0.22341,-1.70566 -0.54977,-1.80667 -0.54977,-1.80667c-3.09659,-0.06022 -3.03249,-2.06311 -3.03249,-2.06311c-0.12627,-1.09371 3.60946,-7.67544 3.60946,-7.67544c1.74062,-3.35302 -0.73627,-5.35979 -0.90334,-7.0907c-0.76735,-7.99986 1.93295,-12.89147 5.60263,-16.76513c6.06303,-6.41466 13.85503,-7.61911 18.96228,-7.57831c13.06437,0.09519 18.35229,4.24082 22.34833,8.70311c8.33012,9.2859 6.56619,17.43729 6.56619,17.43729l-0.00001,0z"/>
   <path fill="white" id="svg_quill" d="m40.39523,52.90991c2.25477,0 5.11667,-0.85987 6.99192,-1.52199c0.25769,-0.40225 0.51748,-0.80877 0.77517,-1.2219c-1.34412,-0.42664 -2.56813,-1.08223 -3.21689,-1.80631c1.50413,0 3.26587,-0.38665 4.83865,-0.83533c0.41523,-0.68868 0.81748,-1.36407 1.20855,-2.02612c-1.19775,-0.42663 -2.26174,-1.03076 -2.85034,-1.68845c1.3063,0 2.81471,-0.29325 4.21891,-0.66429c1.65754,-2.87697 7.37151,-9.56003 7.37151,-9.56003c-13.96312,4.65447 -31.74553,22.43695 -36.4,36.40007l4.54997,-2.27502c0,0 2.2751,-5.61629 4.55012,-7.96243c1.70383,-1.75732 6.18524,-0.35537 9.09995,-1.13752c0.73286,-0.19534 1.96167,-1.59062 3.38808,-3.56804c-1.81741,-0.33789 -3.67008,-1.17743 -4.5256,-2.13264z" />
  </g>
 </g>
</svg>
                    
                    `;
    return visJsGraphShape(svg_author);
}


function post_icon(hover_color) {
    var svg_all = `
<svg width="888" height="888" xmlns="http://www.w3.org/2000/svg">

  <g
     style="display:inline"
     id="layer2">
    <ellipse
       ry="392.51935"
       rx="403.9791"
       style="display:inline;fill:${hover_color};stroke-width:16.47080612;stroke-miterlimit:4"
       id="path1080"
       cx="405.46622"
       cy="393.80331"
       stroke-miterlimit="4" />
  </g>
  <g
     transform="translate(101.86441,94.224576)"
     style="display:inline"
     id="svg_9"
     stroke="null">
    <g
       style="display:inline"
       id="svg_10"
       stroke="null">
      <path
         d="m 10.5,50.5 c 0,-22.0918 17.9082,-40 40,-40 h 500 c 22.0918,0 40,17.9082 40,40 v 500 c 0,22.0918 -17.9082,40 -40,40 h -500 c -22.0918,0 -40,-17.9082 -40,-40 z"
         id="svg_11"
         stroke="null" />
      <path
         d="M 300.5,300.5"
         id="svg_12"
         stroke="null" />
    </g>
  </g>
  <g
     transform="translate(101.86441,94.224576)"
     id="g36"
     style="display:inline">
    <g
       style="display:inline"
       stroke="null"
       id="svg_13">
      <g
         style="display:inline"
         stroke="null"
         id="svg_14">
        <path
           style="fill:#ffffff"
           stroke="null"
           d="m 42.50001,65.81819 c 0,-12.87783 10.43944,-23.31818 23.31818,-23.31818 h 466.36362 c 12.87783,0 23.31818,10.44035 23.31818,23.31818 v 466.36363 c 0,12.87874 -10.44035,23.31818 -23.31818,23.31818 H 65.81819 c -12.87874,0 -23.31818,-10.43944 -23.31818,-23.31818 z"
           id="svg_15" />
        <path
           style="fill:#ffffff"
           stroke="null"
           d="M 299,299"
           id="svg_16" />
      </g>
    </g>
    <title
       id="title20">Layer 2</title>
    <g
       style="display:inline"
       id="svg_saturn">
      <path
         d="m 429.71211,177.60279 c -14.02576,-8.09778 -30.03175,-19.26453 -42.01449,-30.72898 -0.52328,6.40801 0.0594,12.99795 1.79627,19.48001 8.17457,30.50793 39.5613,48.62906 70.06923,40.45449 6.576,-1.76203 12.54922,-4.64632 17.83709,-8.3035 -14.50646,-4.06733 -31.25026,-11.41163 -47.68809,-20.90202 z"
         id="saturn_bottom"
         style="fill:#009ccd" />
      <path
         d="m 513.82677,191.56359 c 4.1557,-6.09755 -0.29665,-16.2319 -12.94554,-29.43093 1.50326,-8.1054 1.33937,-16.79613 -0.93239,-25.27447 -8.19975,-30.60187 -39.58647,-48.72301 -70.0944,-40.54843 -8.66622,2.32211 -16.26367,6.47228 -22.56422,11.98663 -21.7484,-6.48159 -30.81812,0.25303 -31.74933,3.44765 -8.6776,16.37108 29.03338,46.16391 56.43437,61.90447 23.38716,13.44303 70.74308,34.23268 81.85151,17.91507 z m -79.63242,-22.03375 c -38.07648,-22.42022 -59.58193,-47.06551 -54.62874,-55.54153 2.33821,-4.0499 11.25537,-4.7779 23.83543,-1.9816 -5.12919,5.37669 -9.20477,11.67932 -11.86693,18.55976 8.64967,10.01656 24.25529,22.97711 45.0752,34.91808 17.36097,10.02336 35.19692,17.77984 52.80271,21.67117 4.60238,-5.83966 8.02452,-12.4203 10.11459,-19.65089 8.71799,9.51999 12.81411,17.76121 10.2016,21.63289 -6.8244,10.13532 -46.39267,-2.44572 -75.53386,-19.60788 z"
         id="saturn_top"
         style="fill:#009ccd" />
    </g>
    <g
       style="display:inline"
       id="svg_ship">
      <path
         d="m 161.57805,115.45 c -0.63418,-0.63393 -0.87301,-0.31541 -1.01407,-0.17423 -3.65194,3.65194 -6.89406,12.46351 -5.18009,11.60284 6.23955,-3.13287 7.27918,-2.20012 10.931,-5.85181 0.14118,-0.14118 0.46581,-0.3739 -0.18682,-1.02666 z"
         id="ship_flame"
         style="fill:#666666" />
      <path
         d="m 181.26512,115.40112 c -0.1655,-0.52668 0.18121,-0.78048 0.32713,-0.93799 8.06016,-8.70195 13.18275,-20.29569 9.38664,-24.09205 -3.77616,-3.77591 -15.01234,1.49635 -23.71191,9.49838 -0.17211,0.15852 -0.51134,0.45871 -1.11821,0.332 l -2.71045,-0.64541 c -0.75254,-0.17897 -1.81587,0.12185 -2.36288,0.66885 l -9.94549,9.94537 c -0.547,0.54713 -0.36928,1.09301 0.39498,1.21299 l 7.19325,1.13043 c 0.76426,0.12022 1.83707,-0.22911 2.38395,-0.77624 0,0 0.37116,-0.37215 0.74406,6.3e-4 2.05732,2.05707 5.88037,5.88011 7.84041,7.84028 0.38961,0.38949 0.0165,0.76002 0.0165,0.76002 -0.54713,0.54713 -0.89634,1.61969 -0.77611,2.38407 l 1.1303,7.19313 c 0.1201,0.76451 0.66599,0.94223 1.21299,0.3951 l 9.94562,-9.94561 c 0.54688,-0.54701 0.84782,-1.61009 0.6686,-2.36262 z m -0.5127,-14.95022 c -1.68454,-1.68454 -1.68454,-4.41545 0,-6.09974 1.68441,-1.68454 4.41532,-1.68454 6.09999,0 1.68429,1.68417 1.68429,4.4152 0,6.09962 -1.68467,1.68454 -4.4157,1.68454 -6.09999,1.2e-4 z"
         id="ship_body"
         style="fill:#666666" />
    </g>
    <text
       id="text332"
       y="168"
       x="108"
       xml:space="preserve"
       stroke-miterlimit="4"
       font-size="38.16035px"
       font-weight="normal"
       font-style="normal"
       style="font-style:normal;font-weight:normal;font-size:38.1603508px;font-family:'Century Gothic';text-anchor:start;fill:#666666;stroke:#666666;stroke-width:1.84000003;stroke-miterlimit:4">SFFaudio</text>
    <rect
       id="rect4996"
       width="102"
       height="71"
       x="127"
       y="190"
       style="fill:#009ccd" />
    <rect
       id="rect4998"
       width="293"
       height="12"
       x="127"
       y="298"
       style="fill:#000000" />
    <rect
       id="rect4998-1"
       width="293"
       height="12"
       x="127"
       y="348"
       style="fill:#000000" />
    <rect
       id="rect4998-5"
       width="293"
       height="12"
       x="127"
       y="394"
       style="fill:#000000" />
    <rect
       id="rect4998-4"
       width="293"
       height="12"
       x="127"
       y="439"
       style="fill:#000000" />
    <rect
       y="178"
       x="264"
       height="50"
       width="244"
       id="rect5027"
       style="fill:#ffffff" />
    <rect
       stroke="null"
       y="85"
       x="478"
       height="162"
       width="44"
       id="svg_1"
       style="fill:#ffffff" />
  </g>
</svg>




`;
    return visJsGraphShape(svg_all);
}

function help_icon(w_color) {
    var svg_all = `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>background</title>
  <rect x="-1" y="-1" width="3.49996" height="3.49996" id="canvas_background" fill="none"/>
 </g>

 <g>
  <title>Layer 1</title>
  <circle r="12" cy="12" cx="12" id="svg_circle" fill="${background_color}"/>
  <circle r="8" cy="12" cx="12" id="svg_circle" fill="${w_color}"/>
  <path fill='#A0A0A0' d="m12,2c-5.52,0 -10,4.48 -10,10s4.48,10 10,10s10,-4.48 10,-10s-4.48,-10 -10,-10zm1,17l-2,0l0,-2l2,0l0,2zm2.07,-7.75l-0.9,0.92c-0.72,0.73 -1.17,1.33 -1.17,2.83l-2,0l0,-0.5c0,-1.1 0.45,-2.1 1.17,-2.83l1.24,-1.26c0.37,-0.36 0.59,-0.86 0.59,-1.41c0,-1.1 -0.9,-2 -2,-2s-2,0.9 -2,2l-2,0c0,-2.21 1.79,-4 4,-4s4,1.79 4,4c0,0.88 -0.36,1.68 -0.93,2.25z" id="svg_2"/>
 </g>
</svg>


`;
    return visJsGraphShape(svg_all);
}





function zoom_out_shape(w_color) {   
    var svg_wikipedia = `

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xml:space="preserve"
   viewBox="0 0 720.00001 720.00001"
   y="0px"
   x="0px"
   id="Capa_1"
   version="1.1"
   sodipodi:docname="zoom_graph_3.svg"
   width="720"
   height="720"
   inkscape:version="0.92.3 (2405546, 2018-03-11)"><sodipodi:namedview
   pagecolor="#ffffff"
   bordercolor="#666666"
   borderopacity="1"
   objecttolerance="10"
   gridtolerance="10"
   guidetolerance="10"
   inkscape:pageopacity="0"
   inkscape:pageshadow="2"
   inkscape:window-width="1920"
   inkscape:window-height="1018"
   id="namedview12"
   showgrid="false"
   inkscape:zoom="0.464143"
   inkscape:cx="-333.94881"
   inkscape:cy="254.23199"
   inkscape:window-x="-8"
   inkscape:window-y="-8"
   inkscape:window-maximized="1"
   inkscape:current-layer="g8" /><metadata
   id="metadata49"><rdf:RDF><cc:Work
       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
         rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
   id="defs47" />
<g
   id="g8"
   style="display:inline"
   transform="translate(129.2705,82.265497)">
			
		<circle
   r="329.79001"
   cy="275.92731"
   cx="232.83713"
   id="svg_circle"
   style="display:inline;fill:${w_color};stroke-width:27.48249817" /><circle
   style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0;stroke-miterlimit:0;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
   id="path26"
   cx="310.24918"
   cy="206.83282"
   r="185.28773" /><path
   id="path4"
   d="m 397.257,190.711 h -79.456 -31.782 -79.456 c -8.74,0 -15.891,7.119 -15.891,15.891 0,8.772 7.151,15.891 15.891,15.891 h 79.456 31.782 79.456 c 8.772,0 15.891,-7.119 15.891,-15.891 0,-8.772 -7.119,-15.891 -15.891,-15.891 z"
   style="display:inline;fill:#010002"
   inkscape:connector-curvature="0" /><path
   id="path2"
   d="m 301.91,0.016 c -114.099,0 -206.586,92.487 -206.586,206.586 0,49.104 17.194,94.108 45.767,129.577 L 6.46,470.778 c -8.613,8.613 -8.613,22.597 0,31.21 8.613,8.613 22.597,8.613 31.179,0 L 172.27,367.357 c 35.501,28.604 80.505,45.799 129.609,45.799 114.099,0 206.586,-92.487 206.586,-206.586 C 508.465,92.471 416.009,0.016 301.91,0.016 Z m 0,381.39 c -96.396,0 -174.804,-78.407 -174.804,-174.804 0,-96.397 78.407,-174.804 174.804,-174.804 96.397,0 174.804,78.407 174.804,174.804 0,96.397 -78.408,174.804 -174.804,174.804 z"
   style="display:inline;fill:#010002"
   inkscape:connector-curvature="0" /></g>

</svg>`;
     return visJsGraphShape(svg_wikipedia);
}





function zoom_in_shape(w_color) {   
    var svg_wikipedia = `

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xml:space="preserve"
   viewBox="0 0 720.00001 720.00001"
   y="0px"
   x="0px"
   id="Capa_1"
   version="1.1"
   sodipodi:docname="zoom_in_graph_3.svg"
   width="720"
   height="720"
   inkscape:version="0.92.3 (2405546, 2018-03-11)"><sodipodi:namedview
   pagecolor="#ffffff"
   bordercolor="#666666"
   borderopacity="1"
   objecttolerance="10"
   gridtolerance="10"
   guidetolerance="10"
   inkscape:pageopacity="0"
   inkscape:pageshadow="2"
   inkscape:window-width="1920"
   inkscape:window-height="1018"
   id="namedview12"
   showgrid="false"
   inkscape:zoom="1.21"
   inkscape:cx="340.71853"
   inkscape:cy="254.23199"
   inkscape:window-x="-8"
   inkscape:window-y="-8"
   inkscape:window-maximized="1"
   inkscape:current-layer="g8" /><metadata
   id="metadata49"><rdf:RDF><cc:Work
       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
         rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
   id="defs47" />
<g
   id="g8"
   style="display:inline"
   transform="translate(129.2705,82.265497)">
			
		<circle
   r="329.79001"
   cy="275.92731"
   cx="232.83713"
   id="svg_circle"
   style="display:inline;fill:${w_color};stroke-width:27.48249817" /><circle
   style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0;stroke-miterlimit:0;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
   id="path26"
   cx="310.24918"
   cy="206.83282"
   r="185.28773" /><path
   id="path2"
   d="m 301.91,0.016 c -114.099,0 -206.586,92.487 -206.586,206.586 0,49.104 17.194,94.108 45.767,129.577 L 6.46,470.778 c -8.613,8.613 -8.613,22.597 0,31.21 8.613,8.613 22.597,8.613 31.179,0 L 172.27,367.357 c 35.501,28.604 80.505,45.799 129.609,45.799 114.099,0 206.586,-92.487 206.586,-206.586 C 508.465,92.471 416.009,0.016 301.91,0.016 Z m 0,381.39 c -96.396,0 -174.804,-78.407 -174.804,-174.804 0,-96.397 78.407,-174.804 174.804,-174.804 96.397,0 174.804,78.407 174.804,174.804 0,96.397 -78.408,174.804 -174.804,174.804 z"
   style="display:inline;fill:#010002"
   inkscape:connector-curvature="0" /><path
   id="path4-4"
   d="m 397.257,190.711 h -79.456 v -79.45599 c 0,-8.772 -7.119,-15.891005 -15.89101,-15.891005 -8.74,0 -15.891,7.119005 -15.891,15.891005 V 190.711 h -79.456 c -8.74,0 -15.891,7.119 -15.891,15.891 0,8.772 7.151,15.891 15.891,15.891 h 79.456 v 79.45599 c 0,8.74 7.151,15.891 15.891,15.891 8.77201,0 15.89101,-7.151 15.89101,-15.891 V 222.493 h 79.456 c 8.772,0 15.891,-7.119 15.891,-15.891 0,-8.772 -7.119,-15.891 -15.891,-15.891 z"
   style="display:inline;fill:#010002"
   inkscape:connector-curvature="0" /></g>

</svg>`;
     return visJsGraphShape(svg_wikipedia);
}


// these are all graphShapes
module.exports = {
arrow_icon,
zoom_out_shape,
zoom_in_shape,


close_icon,  
// allPodcasts, allRsds, allPdfs,
 wikipedia_icon, author_icon, 
 pdf_icon, post_icon, book_icon, podcast_icon, rsd_icon, rsd_video, help_icon, nothing_icon, filter_grow, filter_shrink, filter_icon, arrow_icon}
