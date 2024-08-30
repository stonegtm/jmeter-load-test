/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 26714.0, "minX": 0.0, "maxY": 47171.0, "series": [{"data": [[0.0, 26714.0], [0.1, 26714.0], [0.2, 26714.0], [0.3, 26714.0], [0.4, 26714.0], [0.5, 26737.0], [0.6, 26737.0], [0.7, 26737.0], [0.8, 26737.0], [0.9, 26737.0], [1.0, 26752.0], [1.1, 26752.0], [1.2, 26752.0], [1.3, 26752.0], [1.4, 26752.0], [1.5, 26771.0], [1.6, 26771.0], [1.7, 26771.0], [1.8, 26771.0], [1.9, 26771.0], [2.0, 26772.0], [2.1, 26772.0], [2.2, 26772.0], [2.3, 26772.0], [2.4, 26772.0], [2.5, 26772.0], [2.6, 26772.0], [2.7, 26772.0], [2.8, 26772.0], [2.9, 26772.0], [3.0, 26813.0], [3.1, 26813.0], [3.2, 26813.0], [3.3, 26813.0], [3.4, 26813.0], [3.5, 26813.0], [3.6, 26813.0], [3.7, 26813.0], [3.8, 26813.0], [3.9, 26813.0], [4.0, 26826.0], [4.1, 26826.0], [4.2, 26826.0], [4.3, 26826.0], [4.4, 26826.0], [4.5, 26852.0], [4.6, 26852.0], [4.7, 26852.0], [4.8, 26852.0], [4.9, 26852.0], [5.0, 26895.0], [5.1, 26895.0], [5.2, 26895.0], [5.3, 26895.0], [5.4, 26895.0], [5.5, 26935.0], [5.6, 26935.0], [5.7, 26935.0], [5.8, 26935.0], [5.9, 26935.0], [6.0, 26937.0], [6.1, 26937.0], [6.2, 26937.0], [6.3, 26937.0], [6.4, 26937.0], [6.5, 26980.0], [6.6, 26980.0], [6.7, 26980.0], [6.8, 26980.0], [6.9, 26980.0], [7.0, 26982.0], [7.1, 26982.0], [7.2, 26982.0], [7.3, 26982.0], [7.4, 26982.0], [7.5, 26998.0], [7.6, 26998.0], [7.7, 26998.0], [7.8, 26998.0], [7.9, 26998.0], [8.0, 27019.0], [8.1, 27019.0], [8.2, 27019.0], [8.3, 27019.0], [8.4, 27019.0], [8.5, 27020.0], [8.6, 27020.0], [8.7, 27020.0], [8.8, 27020.0], [8.9, 27020.0], [9.0, 27057.0], [9.1, 27057.0], [9.2, 27057.0], [9.3, 27057.0], [9.4, 27057.0], [9.5, 27073.0], [9.6, 27073.0], [9.7, 27073.0], [9.8, 27073.0], [9.9, 27073.0], [10.0, 27096.0], [10.1, 27096.0], [10.2, 27096.0], [10.3, 27096.0], [10.4, 27096.0], [10.5, 27096.0], [10.6, 27096.0], [10.7, 27096.0], [10.8, 27096.0], [10.9, 27096.0], [11.0, 27115.0], [11.1, 27115.0], [11.2, 27115.0], [11.3, 27115.0], [11.4, 27115.0], [11.5, 27145.0], [11.6, 27145.0], [11.7, 27145.0], [11.8, 27145.0], [11.9, 27145.0], [12.0, 27146.0], [12.1, 27146.0], [12.2, 27146.0], [12.3, 27146.0], [12.4, 27146.0], [12.5, 27291.0], [12.6, 27291.0], [12.7, 27291.0], [12.8, 27291.0], [12.9, 27291.0], [13.0, 27293.0], [13.1, 27293.0], [13.2, 27293.0], [13.3, 27293.0], [13.4, 27293.0], [13.5, 27350.0], [13.6, 27350.0], [13.7, 27350.0], [13.8, 27350.0], [13.9, 27350.0], [14.0, 27546.0], [14.1, 27546.0], [14.2, 27546.0], [14.3, 27546.0], [14.4, 27546.0], [14.5, 27569.0], [14.6, 27569.0], [14.7, 27569.0], [14.8, 27569.0], [14.9, 27569.0], [15.0, 27795.0], [15.1, 27795.0], [15.2, 27795.0], [15.3, 27795.0], [15.4, 27795.0], [15.5, 27809.0], [15.6, 27809.0], [15.7, 27809.0], [15.8, 27809.0], [15.9, 27809.0], [16.0, 27860.0], [16.1, 27860.0], [16.2, 27860.0], [16.3, 27860.0], [16.4, 27860.0], [16.5, 28445.0], [16.6, 28445.0], [16.7, 28445.0], [16.8, 28445.0], [16.9, 28445.0], [17.0, 29324.0], [17.1, 29324.0], [17.2, 29324.0], [17.3, 29324.0], [17.4, 29324.0], [17.5, 29684.0], [17.6, 29684.0], [17.7, 29684.0], [17.8, 29684.0], [17.9, 29684.0], [18.0, 29745.0], [18.1, 29745.0], [18.2, 29745.0], [18.3, 29745.0], [18.4, 29745.0], [18.5, 31726.0], [18.6, 31726.0], [18.7, 31726.0], [18.8, 31726.0], [18.9, 31726.0], [19.0, 32104.0], [19.1, 32104.0], [19.2, 32104.0], [19.3, 32104.0], [19.4, 32104.0], [19.5, 32290.0], [19.6, 32290.0], [19.7, 32290.0], [19.8, 32290.0], [19.9, 32290.0], [20.0, 32321.0], [20.1, 32321.0], [20.2, 32321.0], [20.3, 32321.0], [20.4, 32321.0], [20.5, 32346.0], [20.6, 32346.0], [20.7, 32346.0], [20.8, 32346.0], [20.9, 32346.0], [21.0, 32440.0], [21.1, 32440.0], [21.2, 32440.0], [21.3, 32440.0], [21.4, 32440.0], [21.5, 32506.0], [21.6, 32506.0], [21.7, 32506.0], [21.8, 32506.0], [21.9, 32506.0], [22.0, 32624.0], [22.1, 32624.0], [22.2, 32624.0], [22.3, 32624.0], [22.4, 32624.0], [22.5, 32665.0], [22.6, 32665.0], [22.7, 32665.0], [22.8, 32665.0], [22.9, 32665.0], [23.0, 32670.0], [23.1, 32670.0], [23.2, 32670.0], [23.3, 32670.0], [23.4, 32670.0], [23.5, 32718.0], [23.6, 32718.0], [23.7, 32718.0], [23.8, 32718.0], [23.9, 32718.0], [24.0, 32726.0], [24.1, 32726.0], [24.2, 32726.0], [24.3, 32726.0], [24.4, 32726.0], [24.5, 32934.0], [24.6, 32934.0], [24.7, 32934.0], [24.8, 32934.0], [24.9, 32934.0], [25.0, 33721.0], [25.1, 33721.0], [25.2, 33721.0], [25.3, 33721.0], [25.4, 33721.0], [25.5, 34260.0], [25.6, 34260.0], [25.7, 34260.0], [25.8, 34260.0], [25.9, 34260.0], [26.0, 34596.0], [26.1, 34596.0], [26.2, 34596.0], [26.3, 34596.0], [26.4, 34596.0], [26.5, 34763.0], [26.6, 34763.0], [26.7, 34763.0], [26.8, 34763.0], [26.9, 34763.0], [27.0, 34882.0], [27.1, 34882.0], [27.2, 34882.0], [27.3, 34882.0], [27.4, 34882.0], [27.5, 34893.0], [27.6, 34893.0], [27.7, 34893.0], [27.8, 34893.0], [27.9, 34893.0], [28.0, 34928.0], [28.1, 34928.0], [28.2, 34928.0], [28.3, 34928.0], [28.4, 34928.0], [28.5, 35056.0], [28.6, 35056.0], [28.7, 35056.0], [28.8, 35056.0], [28.9, 35056.0], [29.0, 35122.0], [29.1, 35122.0], [29.2, 35122.0], [29.3, 35122.0], [29.4, 35122.0], [29.5, 35182.0], [29.6, 35182.0], [29.7, 35182.0], [29.8, 35182.0], [29.9, 35182.0], [30.0, 35285.0], [30.1, 35285.0], [30.2, 35285.0], [30.3, 35285.0], [30.4, 35285.0], [30.5, 35343.0], [30.6, 35343.0], [30.7, 35343.0], [30.8, 35343.0], [30.9, 35343.0], [31.0, 35633.0], [31.1, 35633.0], [31.2, 35633.0], [31.3, 35633.0], [31.4, 35633.0], [31.5, 35672.0], [31.6, 35672.0], [31.7, 35672.0], [31.8, 35672.0], [31.9, 35672.0], [32.0, 35685.0], [32.1, 35685.0], [32.2, 35685.0], [32.3, 35685.0], [32.4, 35685.0], [32.5, 35696.0], [32.6, 35696.0], [32.7, 35696.0], [32.8, 35696.0], [32.9, 35696.0], [33.0, 35809.0], [33.1, 35809.0], [33.2, 35809.0], [33.3, 35809.0], [33.4, 35809.0], [33.5, 35931.0], [33.6, 35931.0], [33.7, 35931.0], [33.8, 35931.0], [33.9, 35931.0], [34.0, 36050.0], [34.1, 36050.0], [34.2, 36050.0], [34.3, 36050.0], [34.4, 36050.0], [34.5, 36144.0], [34.6, 36144.0], [34.7, 36144.0], [34.8, 36144.0], [34.9, 36144.0], [35.0, 36456.0], [35.1, 36456.0], [35.2, 36456.0], [35.3, 36456.0], [35.4, 36456.0], [35.5, 37213.0], [35.6, 37213.0], [35.7, 37213.0], [35.8, 37213.0], [35.9, 37213.0], [36.0, 37232.0], [36.1, 37232.0], [36.2, 37232.0], [36.3, 37232.0], [36.4, 37232.0], [36.5, 37915.0], [36.6, 37915.0], [36.7, 37915.0], [36.8, 37915.0], [36.9, 37915.0], [37.0, 38182.0], [37.1, 38182.0], [37.2, 38182.0], [37.3, 38182.0], [37.4, 38182.0], [37.5, 38329.0], [37.6, 38329.0], [37.7, 38329.0], [37.8, 38329.0], [37.9, 38329.0], [38.0, 38337.0], [38.1, 38337.0], [38.2, 38337.0], [38.3, 38337.0], [38.4, 38337.0], [38.5, 38450.0], [38.6, 38450.0], [38.7, 38450.0], [38.8, 38450.0], [38.9, 38450.0], [39.0, 38598.0], [39.1, 38598.0], [39.2, 38598.0], [39.3, 38598.0], [39.4, 38598.0], [39.5, 38742.0], [39.6, 38742.0], [39.7, 38742.0], [39.8, 38742.0], [39.9, 38742.0], [40.0, 38995.0], [40.1, 38995.0], [40.2, 38995.0], [40.3, 38995.0], [40.4, 38995.0], [40.5, 39068.0], [40.6, 39068.0], [40.7, 39068.0], [40.8, 39068.0], [40.9, 39068.0], [41.0, 39702.0], [41.1, 39702.0], [41.2, 39702.0], [41.3, 39702.0], [41.4, 39702.0], [41.5, 40008.0], [41.6, 40008.0], [41.7, 40008.0], [41.8, 40008.0], [41.9, 40008.0], [42.0, 40234.0], [42.1, 40234.0], [42.2, 40234.0], [42.3, 40234.0], [42.4, 40234.0], [42.5, 40635.0], [42.6, 40635.0], [42.7, 40635.0], [42.8, 40635.0], [42.9, 40635.0], [43.0, 40777.0], [43.1, 40777.0], [43.2, 40777.0], [43.3, 40777.0], [43.4, 40777.0], [43.5, 41273.0], [43.6, 41273.0], [43.7, 41273.0], [43.8, 41273.0], [43.9, 41273.0], [44.0, 41305.0], [44.1, 41305.0], [44.2, 41305.0], [44.3, 41305.0], [44.4, 41305.0], [44.5, 41544.0], [44.6, 41544.0], [44.7, 41544.0], [44.8, 41544.0], [44.9, 41544.0], [45.0, 41659.0], [45.1, 41659.0], [45.2, 41659.0], [45.3, 41659.0], [45.4, 41659.0], [45.5, 41787.0], [45.6, 41787.0], [45.7, 41787.0], [45.8, 41787.0], [45.9, 41787.0], [46.0, 41902.0], [46.1, 41902.0], [46.2, 41902.0], [46.3, 41902.0], [46.4, 41902.0], [46.5, 41940.0], [46.6, 41940.0], [46.7, 41940.0], [46.8, 41940.0], [46.9, 41940.0], [47.0, 41967.0], [47.1, 41967.0], [47.2, 41967.0], [47.3, 41967.0], [47.4, 41967.0], [47.5, 41977.0], [47.6, 41977.0], [47.7, 41977.0], [47.8, 41977.0], [47.9, 41977.0], [48.0, 42009.0], [48.1, 42009.0], [48.2, 42009.0], [48.3, 42009.0], [48.4, 42009.0], [48.5, 42022.0], [48.6, 42022.0], [48.7, 42022.0], [48.8, 42022.0], [48.9, 42022.0], [49.0, 42063.0], [49.1, 42063.0], [49.2, 42063.0], [49.3, 42063.0], [49.4, 42063.0], [49.5, 42066.0], [49.6, 42066.0], [49.7, 42066.0], [49.8, 42066.0], [49.9, 42066.0], [50.0, 42410.0], [50.1, 42410.0], [50.2, 42410.0], [50.3, 42410.0], [50.4, 42410.0], [50.5, 42457.0], [50.6, 42457.0], [50.7, 42457.0], [50.8, 42457.0], [50.9, 42457.0], [51.0, 42500.0], [51.1, 42500.0], [51.2, 42500.0], [51.3, 42500.0], [51.4, 42500.0], [51.5, 43279.0], [51.6, 43279.0], [51.7, 43279.0], [51.8, 43279.0], [51.9, 43279.0], [52.0, 43317.0], [52.1, 43317.0], [52.2, 43317.0], [52.3, 43317.0], [52.4, 43317.0], [52.5, 43685.0], [52.6, 43685.0], [52.7, 43685.0], [52.8, 43685.0], [52.9, 43685.0], [53.0, 43727.0], [53.1, 43727.0], [53.2, 43727.0], [53.3, 43727.0], [53.4, 43727.0], [53.5, 44460.0], [53.6, 44460.0], [53.7, 44460.0], [53.8, 44460.0], [53.9, 44460.0], [54.0, 44665.0], [54.1, 44665.0], [54.2, 44665.0], [54.3, 44665.0], [54.4, 44665.0], [54.5, 44816.0], [54.6, 44816.0], [54.7, 44816.0], [54.8, 44816.0], [54.9, 44816.0], [55.0, 44838.0], [55.1, 44838.0], [55.2, 44838.0], [55.3, 44838.0], [55.4, 44838.0], [55.5, 44962.0], [55.6, 44962.0], [55.7, 44962.0], [55.8, 44962.0], [55.9, 44962.0], [56.0, 45006.0], [56.1, 45006.0], [56.2, 45006.0], [56.3, 45006.0], [56.4, 45006.0], [56.5, 45095.0], [56.6, 45095.0], [56.7, 45095.0], [56.8, 45095.0], [56.9, 45095.0], [57.0, 45219.0], [57.1, 45219.0], [57.2, 45219.0], [57.3, 45219.0], [57.4, 45219.0], [57.5, 45244.0], [57.6, 45244.0], [57.7, 45244.0], [57.8, 45244.0], [57.9, 45244.0], [58.0, 45455.0], [58.1, 45455.0], [58.2, 45455.0], [58.3, 45455.0], [58.4, 45455.0], [58.5, 45457.0], [58.6, 45457.0], [58.7, 45457.0], [58.8, 45457.0], [58.9, 45457.0], [59.0, 45550.0], [59.1, 45550.0], [59.2, 45550.0], [59.3, 45550.0], [59.4, 45550.0], [59.5, 45580.0], [59.6, 45580.0], [59.7, 45580.0], [59.8, 45580.0], [59.9, 45580.0], [60.0, 45623.0], [60.1, 45623.0], [60.2, 45623.0], [60.3, 45623.0], [60.4, 45623.0], [60.5, 45632.0], [60.6, 45632.0], [60.7, 45632.0], [60.8, 45632.0], [60.9, 45632.0], [61.0, 45645.0], [61.1, 45645.0], [61.2, 45645.0], [61.3, 45645.0], [61.4, 45645.0], [61.5, 45660.0], [61.6, 45660.0], [61.7, 45660.0], [61.8, 45660.0], [61.9, 45660.0], [62.0, 45728.0], [62.1, 45728.0], [62.2, 45728.0], [62.3, 45728.0], [62.4, 45728.0], [62.5, 45822.0], [62.6, 45822.0], [62.7, 45822.0], [62.8, 45822.0], [62.9, 45822.0], [63.0, 45836.0], [63.1, 45836.0], [63.2, 45836.0], [63.3, 45836.0], [63.4, 45836.0], [63.5, 45837.0], [63.6, 45837.0], [63.7, 45837.0], [63.8, 45837.0], [63.9, 45837.0], [64.0, 45855.0], [64.1, 45855.0], [64.2, 45855.0], [64.3, 45855.0], [64.4, 45855.0], [64.5, 45881.0], [64.6, 45881.0], [64.7, 45881.0], [64.8, 45881.0], [64.9, 45881.0], [65.0, 45881.0], [65.1, 45881.0], [65.2, 45881.0], [65.3, 45881.0], [65.4, 45881.0], [65.5, 45891.0], [65.6, 45891.0], [65.7, 45891.0], [65.8, 45891.0], [65.9, 45891.0], [66.0, 45936.0], [66.1, 45936.0], [66.2, 45936.0], [66.3, 45936.0], [66.4, 45936.0], [66.5, 45937.0], [66.6, 45937.0], [66.7, 45937.0], [66.8, 45937.0], [66.9, 45937.0], [67.0, 45947.0], [67.1, 45947.0], [67.2, 45947.0], [67.3, 45947.0], [67.4, 45947.0], [67.5, 45961.0], [67.6, 45961.0], [67.7, 45961.0], [67.8, 45961.0], [67.9, 45961.0], [68.0, 45970.0], [68.1, 45970.0], [68.2, 45970.0], [68.3, 45970.0], [68.4, 45970.0], [68.5, 46005.0], [68.6, 46005.0], [68.7, 46005.0], [68.8, 46005.0], [68.9, 46005.0], [69.0, 46025.0], [69.1, 46025.0], [69.2, 46025.0], [69.3, 46025.0], [69.4, 46025.0], [69.5, 46030.0], [69.6, 46030.0], [69.7, 46030.0], [69.8, 46030.0], [69.9, 46030.0], [70.0, 46063.0], [70.1, 46063.0], [70.2, 46063.0], [70.3, 46063.0], [70.4, 46063.0], [70.5, 46067.0], [70.6, 46067.0], [70.7, 46067.0], [70.8, 46067.0], [70.9, 46067.0], [71.0, 46069.0], [71.1, 46069.0], [71.2, 46069.0], [71.3, 46069.0], [71.4, 46069.0], [71.5, 46112.0], [71.6, 46112.0], [71.7, 46112.0], [71.8, 46112.0], [71.9, 46112.0], [72.0, 46114.0], [72.1, 46114.0], [72.2, 46114.0], [72.3, 46114.0], [72.4, 46114.0], [72.5, 46122.0], [72.6, 46122.0], [72.7, 46122.0], [72.8, 46122.0], [72.9, 46122.0], [73.0, 46129.0], [73.1, 46129.0], [73.2, 46129.0], [73.3, 46129.0], [73.4, 46129.0], [73.5, 46157.0], [73.6, 46157.0], [73.7, 46157.0], [73.8, 46157.0], [73.9, 46157.0], [74.0, 46166.0], [74.1, 46166.0], [74.2, 46166.0], [74.3, 46166.0], [74.4, 46166.0], [74.5, 46168.0], [74.6, 46168.0], [74.7, 46168.0], [74.8, 46168.0], [74.9, 46168.0], [75.0, 46254.0], [75.1, 46254.0], [75.2, 46254.0], [75.3, 46254.0], [75.4, 46254.0], [75.5, 46271.0], [75.6, 46271.0], [75.7, 46271.0], [75.8, 46271.0], [75.9, 46271.0], [76.0, 46275.0], [76.1, 46275.0], [76.2, 46275.0], [76.3, 46275.0], [76.4, 46275.0], [76.5, 46293.0], [76.6, 46293.0], [76.7, 46293.0], [76.8, 46293.0], [76.9, 46293.0], [77.0, 46314.0], [77.1, 46314.0], [77.2, 46314.0], [77.3, 46314.0], [77.4, 46314.0], [77.5, 46329.0], [77.6, 46329.0], [77.7, 46329.0], [77.8, 46329.0], [77.9, 46329.0], [78.0, 46347.0], [78.1, 46347.0], [78.2, 46347.0], [78.3, 46347.0], [78.4, 46347.0], [78.5, 46351.0], [78.6, 46351.0], [78.7, 46351.0], [78.8, 46351.0], [78.9, 46351.0], [79.0, 46383.0], [79.1, 46383.0], [79.2, 46383.0], [79.3, 46383.0], [79.4, 46383.0], [79.5, 46394.0], [79.6, 46394.0], [79.7, 46394.0], [79.8, 46394.0], [79.9, 46394.0], [80.0, 46400.0], [80.1, 46400.0], [80.2, 46400.0], [80.3, 46400.0], [80.4, 46400.0], [80.5, 46406.0], [80.6, 46406.0], [80.7, 46406.0], [80.8, 46406.0], [80.9, 46406.0], [81.0, 46418.0], [81.1, 46418.0], [81.2, 46418.0], [81.3, 46418.0], [81.4, 46418.0], [81.5, 46436.0], [81.6, 46436.0], [81.7, 46436.0], [81.8, 46436.0], [81.9, 46436.0], [82.0, 46446.0], [82.1, 46446.0], [82.2, 46446.0], [82.3, 46446.0], [82.4, 46446.0], [82.5, 46455.0], [82.6, 46455.0], [82.7, 46455.0], [82.8, 46455.0], [82.9, 46455.0], [83.0, 46475.0], [83.1, 46475.0], [83.2, 46475.0], [83.3, 46475.0], [83.4, 46475.0], [83.5, 46480.0], [83.6, 46480.0], [83.7, 46480.0], [83.8, 46480.0], [83.9, 46480.0], [84.0, 46495.0], [84.1, 46495.0], [84.2, 46495.0], [84.3, 46495.0], [84.4, 46495.0], [84.5, 46512.0], [84.6, 46512.0], [84.7, 46512.0], [84.8, 46512.0], [84.9, 46512.0], [85.0, 46531.0], [85.1, 46531.0], [85.2, 46531.0], [85.3, 46531.0], [85.4, 46531.0], [85.5, 46535.0], [85.6, 46535.0], [85.7, 46535.0], [85.8, 46535.0], [85.9, 46535.0], [86.0, 46537.0], [86.1, 46537.0], [86.2, 46537.0], [86.3, 46537.0], [86.4, 46537.0], [86.5, 46585.0], [86.6, 46585.0], [86.7, 46585.0], [86.8, 46585.0], [86.9, 46585.0], [87.0, 46661.0], [87.1, 46661.0], [87.2, 46661.0], [87.3, 46661.0], [87.4, 46661.0], [87.5, 46662.0], [87.6, 46662.0], [87.7, 46662.0], [87.8, 46662.0], [87.9, 46662.0], [88.0, 46683.0], [88.1, 46683.0], [88.2, 46683.0], [88.3, 46683.0], [88.4, 46683.0], [88.5, 46685.0], [88.6, 46685.0], [88.7, 46685.0], [88.8, 46685.0], [88.9, 46685.0], [89.0, 46705.0], [89.1, 46705.0], [89.2, 46705.0], [89.3, 46705.0], [89.4, 46705.0], [89.5, 46707.0], [89.6, 46707.0], [89.7, 46707.0], [89.8, 46707.0], [89.9, 46707.0], [90.0, 46719.0], [90.1, 46719.0], [90.2, 46719.0], [90.3, 46719.0], [90.4, 46719.0], [90.5, 46720.0], [90.6, 46720.0], [90.7, 46720.0], [90.8, 46720.0], [90.9, 46720.0], [91.0, 46738.0], [91.1, 46738.0], [91.2, 46738.0], [91.3, 46738.0], [91.4, 46738.0], [91.5, 46743.0], [91.6, 46743.0], [91.7, 46743.0], [91.8, 46743.0], [91.9, 46743.0], [92.0, 46770.0], [92.1, 46770.0], [92.2, 46770.0], [92.3, 46770.0], [92.4, 46770.0], [92.5, 46813.0], [92.6, 46813.0], [92.7, 46813.0], [92.8, 46813.0], [92.9, 46813.0], [93.0, 46819.0], [93.1, 46819.0], [93.2, 46819.0], [93.3, 46819.0], [93.4, 46819.0], [93.5, 46866.0], [93.6, 46866.0], [93.7, 46866.0], [93.8, 46866.0], [93.9, 46866.0], [94.0, 46868.0], [94.1, 46868.0], [94.2, 46868.0], [94.3, 46868.0], [94.4, 46868.0], [94.5, 46922.0], [94.6, 46922.0], [94.7, 46922.0], [94.8, 46922.0], [94.9, 46922.0], [95.0, 46923.0], [95.1, 46923.0], [95.2, 46923.0], [95.3, 46923.0], [95.4, 46923.0], [95.5, 46934.0], [95.6, 46934.0], [95.7, 46934.0], [95.8, 46934.0], [95.9, 46934.0], [96.0, 46964.0], [96.1, 46964.0], [96.2, 46964.0], [96.3, 46964.0], [96.4, 46964.0], [96.5, 46993.0], [96.6, 46993.0], [96.7, 46993.0], [96.8, 46993.0], [96.9, 46993.0], [97.0, 47025.0], [97.1, 47025.0], [97.2, 47025.0], [97.3, 47025.0], [97.4, 47025.0], [97.5, 47087.0], [97.6, 47087.0], [97.7, 47087.0], [97.8, 47087.0], [97.9, 47087.0], [98.0, 47113.0], [98.1, 47113.0], [98.2, 47113.0], [98.3, 47113.0], [98.4, 47113.0], [98.5, 47135.0], [98.6, 47135.0], [98.7, 47135.0], [98.8, 47135.0], [98.9, 47135.0], [99.0, 47149.0], [99.1, 47149.0], [99.2, 47149.0], [99.3, 47149.0], [99.4, 47149.0], [99.5, 47171.0], [99.6, 47171.0], [99.7, 47171.0], [99.8, 47171.0], [99.9, 47171.0]], "isOverall": false, "label": "Create Issue User 200 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 26700.0, "maxY": 9.0, "series": [{"data": [[26700.0, 6.0], [26800.0, 5.0], [26900.0, 5.0], [27000.0, 6.0], [27100.0, 3.0], [27200.0, 2.0], [27300.0, 1.0], [27500.0, 2.0], [27700.0, 1.0], [27800.0, 2.0], [28400.0, 1.0], [29300.0, 1.0], [29600.0, 1.0], [29700.0, 1.0], [31700.0, 1.0], [32100.0, 1.0], [32200.0, 1.0], [32300.0, 2.0], [32400.0, 1.0], [32500.0, 1.0], [32600.0, 3.0], [32700.0, 2.0], [32900.0, 1.0], [33700.0, 1.0], [34200.0, 1.0], [34500.0, 1.0], [34700.0, 1.0], [34800.0, 2.0], [35200.0, 1.0], [35000.0, 1.0], [34900.0, 1.0], [35100.0, 2.0], [35300.0, 1.0], [36400.0, 1.0], [35600.0, 4.0], [35800.0, 1.0], [35900.0, 1.0], [36000.0, 1.0], [36100.0, 1.0], [37200.0, 2.0], [38300.0, 2.0], [38400.0, 1.0], [38100.0, 1.0], [37900.0, 1.0], [38700.0, 1.0], [38500.0, 1.0], [38900.0, 1.0], [39000.0, 1.0], [39700.0, 1.0], [40000.0, 1.0], [40200.0, 1.0], [40600.0, 1.0], [40700.0, 1.0], [41900.0, 4.0], [41200.0, 1.0], [41600.0, 1.0], [41300.0, 1.0], [41500.0, 1.0], [41700.0, 1.0], [42000.0, 4.0], [42400.0, 2.0], [42500.0, 1.0], [44600.0, 1.0], [43200.0, 1.0], [43600.0, 1.0], [43300.0, 1.0], [43700.0, 1.0], [44400.0, 1.0], [45000.0, 2.0], [44900.0, 1.0], [44800.0, 2.0], [45200.0, 2.0], [45400.0, 2.0], [45800.0, 7.0], [45500.0, 2.0], [46000.0, 6.0], [45700.0, 1.0], [45600.0, 4.0], [45900.0, 5.0], [46100.0, 7.0], [46700.0, 7.0], [46600.0, 4.0], [46800.0, 4.0], [46900.0, 5.0], [47100.0, 4.0], [47000.0, 2.0], [46200.0, 4.0], [46400.0, 9.0], [46500.0, 5.0], [46300.0, 6.0]], "isOverall": false, "label": "Create Issue User 200 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 47100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 200.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 200.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 61.622950819672155, "minX": 1.71584604E12, "maxY": 161.5897435897436, "series": [{"data": [[1.71584604E12, 161.5897435897436], [1.7158461E12, 61.622950819672155]], "isOverall": false, "label": "User 200 Ramp 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158461E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 26714.0, "minX": 1.0, "maxY": 47171.0, "series": [{"data": [[3.0, 46901.0], [4.0, 47171.0], [6.0, 47087.0], [7.0, 46866.0], [9.0, 46851.0], [10.0, 47135.0], [11.0, 46770.0], [12.0, 46813.0], [14.0, 46887.5], [16.0, 46838.0], [17.0, 46743.0], [18.0, 46923.0], [19.0, 46537.0], [20.0, 46661.0], [21.0, 46495.0], [22.0, 46531.0], [23.0, 46585.0], [24.0, 46512.0], [26.0, 46713.5], [27.0, 46705.0], [28.0, 46922.0], [29.0, 46480.0], [30.0, 46535.0], [31.0, 46685.0], [33.0, 46406.0], [32.0, 46351.0], [34.0, 46819.0], [37.0, 46383.0], [36.0, 46343.5], [39.0, 46400.0], [38.0, 46719.0], [41.0, 46292.0], [43.0, 46347.0], [42.0, 46271.0], [45.0, 46275.0], [44.0, 46168.0], [47.0, 46157.0], [46.0, 46112.0], [49.0, 46455.0], [48.0, 46446.0], [51.0, 46122.0], [50.0, 46475.0], [53.0, 46314.0], [52.0, 46025.0], [55.0, 45921.0], [57.0, 46254.0], [56.0, 46067.0], [59.0, 45891.0], [58.0, 46329.0], [61.0, 46114.0], [60.0, 46436.0], [63.0, 46129.0], [62.0, 45936.0], [66.0, 45881.0], [65.0, 45970.0], [64.0, 45937.0], [71.0, 46069.0], [70.0, 46046.5], [68.0, 45785.0], [75.0, 45660.0], [74.0, 45837.0], [73.0, 45550.0], [72.0, 45822.0], [79.0, 45680.0], [77.0, 45457.0], [76.0, 45645.0], [83.0, 45836.0], [82.0, 45855.0], [81.0, 45580.0], [80.0, 46005.0], [87.0, 45041.0], [85.0, 45219.0], [84.0, 45455.0], [91.0, 45095.0], [90.0, 45006.0], [89.0, 44889.0], [95.0, 43317.0], [94.0, 43727.0], [93.0, 44460.0], [92.0, 44665.0], [99.0, 42500.0], [98.0, 42457.0], [97.0, 43279.0], [96.0, 43685.0], [103.0, 42009.0], [102.0, 42066.0], [101.0, 42063.0], [100.0, 42410.0], [107.0, 41544.0], [106.0, 41787.0], [105.0, 41902.0], [104.0, 42022.0], [111.0, 41940.0], [110.0, 41967.0], [109.0, 41305.0], [108.0, 41977.0], [115.0, 40635.0], [114.0, 40777.0], [113.0, 41273.0], [112.0, 41659.0], [119.0, 39068.0], [118.0, 39702.0], [117.0, 40008.0], [116.0, 40234.0], [123.0, 38329.0], [122.0, 38670.0], [120.0, 38995.0], [127.0, 38337.0], [126.0, 38450.0], [125.0, 38182.0], [124.0, 37915.0], [135.0, 35809.0], [134.0, 35672.0], [133.0, 35931.0], [132.0, 36050.0], [131.0, 36144.0], [130.0, 36456.0], [129.0, 37232.0], [128.0, 37213.0], [143.0, 35056.0], [142.0, 35122.0], [141.0, 35343.0], [140.0, 35285.0], [139.0, 35182.0], [138.0, 35664.5], [136.0, 35685.0], [151.0, 32934.0], [150.0, 33721.0], [149.0, 34260.0], [148.0, 34596.0], [147.0, 34763.0], [146.0, 34882.0], [145.0, 34893.0], [144.0, 34928.0], [159.0, 32346.0], [158.0, 32440.0], [157.0, 32506.0], [156.0, 32624.0], [155.0, 32667.5], [153.0, 32726.0], [152.0, 32718.0], [167.0, 28445.0], [166.0, 29324.0], [165.0, 29684.0], [164.0, 29745.0], [163.0, 31726.0], [162.0, 32104.0], [161.0, 32290.0], [160.0, 32321.0], [175.0, 27293.0], [174.0, 27291.0], [173.0, 27350.0], [172.0, 27546.0], [171.0, 27569.0], [170.0, 27795.0], [169.0, 27809.0], [168.0, 27860.0], [182.0, 27057.0], [181.0, 27073.0], [180.0, 27096.0], [179.0, 27096.0], [178.0, 27115.0], [177.0, 27145.5], [191.0, 26826.0], [190.0, 26895.0], [189.0, 26937.0], [188.0, 26935.0], [187.0, 26980.0], [186.0, 26982.0], [185.0, 26998.0], [184.0, 27019.5], [199.0, 26737.0], [198.0, 26761.5], [197.0, 26772.0], [195.0, 26772.0], [194.0, 26813.0], [192.0, 26852.0], [200.0, 26714.0], [1.0, 47087.0]], "isOverall": false, "label": "Create Issue User 200 Ramp 1", "isController": false}, {"data": [[100.61000000000001, 39693.114999999976]], "isOverall": false, "label": "Create Issue User 200 Ramp 1-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2169.7, "minX": 1.71584604E12, "maxY": 6960.1, "series": [{"data": [[1.71584604E12, 4449.9], [1.7158461E12, 6960.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71584604E12, 2169.7], [1.7158461E12, 3393.633333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158461E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 31280.282051282058, "minX": 1.71584604E12, "maxY": 45071.81147540982, "series": [{"data": [[1.71584604E12, 31280.282051282058], [1.7158461E12, 45071.81147540982]], "isOverall": false, "label": "Create Issue User 200 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158461E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 31279.858974358962, "minX": 1.71584604E12, "maxY": 45071.5655737705, "series": [{"data": [[1.71584604E12, 31279.858974358962], [1.7158461E12, 45071.5655737705]], "isOverall": false, "label": "Create Issue User 200 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158461E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.6393442622950822, "minX": 1.71584604E12, "maxY": 8.153846153846153, "series": [{"data": [[1.71584604E12, 8.153846153846153], [1.7158461E12, 0.6393442622950822]], "isOverall": false, "label": "Create Issue User 200 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158461E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 26714.0, "minX": 1.71584604E12, "maxY": 47171.0, "series": [{"data": [[1.71584604E12, 38450.0], [1.7158461E12, 47171.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71584604E12, 26714.0], [1.7158461E12, 38598.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71584604E12, 36531.700000000004], [1.7158461E12, 46867.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71584604E12, 38450.0], [1.7158461E12, 47165.94]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71584604E12, 32197.0], [1.7158461E12, 46027.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71584604E12, 38189.35], [1.7158461E12, 47020.2]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158461E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 26813.0, "minX": 1.0, "maxY": 46705.0, "series": [{"data": [[2.0, 34428.0], [10.0, 44984.0], [40.0, 45987.5], [43.0, 46705.0], [11.0, 32506.0], [3.0, 40434.5], [12.0, 35152.0], [13.0, 26813.0], [15.0, 41977.0], [1.0, 31726.0], [4.0, 38868.5], [20.0, 27130.0], [5.0, 38329.0], [6.0, 35990.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 26812.0, "minX": 1.0, "maxY": 46705.0, "series": [{"data": [[2.0, 34427.5], [10.0, 44984.0], [40.0, 45987.0], [43.0, 46705.0], [11.0, 32506.0], [3.0, 40434.0], [12.0, 35152.0], [13.0, 26812.0], [15.0, 41977.0], [1.0, 31726.0], [4.0, 38868.5], [20.0, 27130.0], [5.0, 38328.0], [6.0, 35990.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.71584604E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.71584604E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71584604E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.71584604E12, "maxY": 2.033333333333333, "series": [{"data": [[1.71584604E12, 1.3], [1.7158461E12, 2.033333333333333]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158461E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.71584604E12, "maxY": 2.033333333333333, "series": [{"data": [[1.71584604E12, 1.3], [1.7158461E12, 2.033333333333333]], "isOverall": false, "label": "Create Issue User 200 Ramp 1-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158461E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.71584604E12, "maxY": 2.033333333333333, "series": [{"data": [[1.71584604E12, 1.3], [1.7158461E12, 2.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158461E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

