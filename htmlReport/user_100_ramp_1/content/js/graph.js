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
        data: {"result": {"minY": 12335.0, "minX": 0.0, "maxY": 24697.0, "series": [{"data": [[0.0, 12335.0], [0.1, 12335.0], [0.2, 12335.0], [0.3, 12335.0], [0.4, 12335.0], [0.5, 12335.0], [0.6, 12335.0], [0.7, 12335.0], [0.8, 12335.0], [0.9, 12335.0], [1.0, 12365.0], [1.1, 12365.0], [1.2, 12365.0], [1.3, 12365.0], [1.4, 12365.0], [1.5, 12365.0], [1.6, 12365.0], [1.7, 12365.0], [1.8, 12365.0], [1.9, 12365.0], [2.0, 12549.0], [2.1, 12549.0], [2.2, 12549.0], [2.3, 12549.0], [2.4, 12549.0], [2.5, 12549.0], [2.6, 12549.0], [2.7, 12549.0], [2.8, 12549.0], [2.9, 12549.0], [3.0, 12549.0], [3.1, 12549.0], [3.2, 12549.0], [3.3, 12549.0], [3.4, 12549.0], [3.5, 12549.0], [3.6, 12549.0], [3.7, 12549.0], [3.8, 12549.0], [3.9, 12549.0], [4.0, 12586.0], [4.1, 12586.0], [4.2, 12586.0], [4.3, 12586.0], [4.4, 12586.0], [4.5, 12586.0], [4.6, 12586.0], [4.7, 12586.0], [4.8, 12586.0], [4.9, 12586.0], [5.0, 13496.0], [5.1, 13496.0], [5.2, 13496.0], [5.3, 13496.0], [5.4, 13496.0], [5.5, 13496.0], [5.6, 13496.0], [5.7, 13496.0], [5.8, 13496.0], [5.9, 13496.0], [6.0, 13674.0], [6.1, 13674.0], [6.2, 13674.0], [6.3, 13674.0], [6.4, 13674.0], [6.5, 13674.0], [6.6, 13674.0], [6.7, 13674.0], [6.8, 13674.0], [6.9, 13674.0], [7.0, 14100.0], [7.1, 14100.0], [7.2, 14100.0], [7.3, 14100.0], [7.4, 14100.0], [7.5, 14100.0], [7.6, 14100.0], [7.7, 14100.0], [7.8, 14100.0], [7.9, 14100.0], [8.0, 14140.0], [8.1, 14140.0], [8.2, 14140.0], [8.3, 14140.0], [8.4, 14140.0], [8.5, 14140.0], [8.6, 14140.0], [8.7, 14140.0], [8.8, 14140.0], [8.9, 14140.0], [9.0, 14195.0], [9.1, 14195.0], [9.2, 14195.0], [9.3, 14195.0], [9.4, 14195.0], [9.5, 14195.0], [9.6, 14195.0], [9.7, 14195.0], [9.8, 14195.0], [9.9, 14195.0], [10.0, 14359.0], [10.1, 14359.0], [10.2, 14359.0], [10.3, 14359.0], [10.4, 14359.0], [10.5, 14359.0], [10.6, 14359.0], [10.7, 14359.0], [10.8, 14359.0], [10.9, 14359.0], [11.0, 14404.0], [11.1, 14404.0], [11.2, 14404.0], [11.3, 14404.0], [11.4, 14404.0], [11.5, 14404.0], [11.6, 14404.0], [11.7, 14404.0], [11.8, 14404.0], [11.9, 14404.0], [12.0, 14632.0], [12.1, 14632.0], [12.2, 14632.0], [12.3, 14632.0], [12.4, 14632.0], [12.5, 14632.0], [12.6, 14632.0], [12.7, 14632.0], [12.8, 14632.0], [12.9, 14632.0], [13.0, 15176.0], [13.1, 15176.0], [13.2, 15176.0], [13.3, 15176.0], [13.4, 15176.0], [13.5, 15176.0], [13.6, 15176.0], [13.7, 15176.0], [13.8, 15176.0], [13.9, 15176.0], [14.0, 15401.0], [14.1, 15401.0], [14.2, 15401.0], [14.3, 15401.0], [14.4, 15401.0], [14.5, 15401.0], [14.6, 15401.0], [14.7, 15401.0], [14.8, 15401.0], [14.9, 15401.0], [15.0, 16433.0], [15.1, 16433.0], [15.2, 16433.0], [15.3, 16433.0], [15.4, 16433.0], [15.5, 16433.0], [15.6, 16433.0], [15.7, 16433.0], [15.8, 16433.0], [15.9, 16433.0], [16.0, 17322.0], [16.1, 17322.0], [16.2, 17322.0], [16.3, 17322.0], [16.4, 17322.0], [16.5, 17322.0], [16.6, 17322.0], [16.7, 17322.0], [16.8, 17322.0], [16.9, 17322.0], [17.0, 17478.0], [17.1, 17478.0], [17.2, 17478.0], [17.3, 17478.0], [17.4, 17478.0], [17.5, 17478.0], [17.6, 17478.0], [17.7, 17478.0], [17.8, 17478.0], [17.9, 17478.0], [18.0, 17509.0], [18.1, 17509.0], [18.2, 17509.0], [18.3, 17509.0], [18.4, 17509.0], [18.5, 17509.0], [18.6, 17509.0], [18.7, 17509.0], [18.8, 17509.0], [18.9, 17509.0], [19.0, 17520.0], [19.1, 17520.0], [19.2, 17520.0], [19.3, 17520.0], [19.4, 17520.0], [19.5, 17520.0], [19.6, 17520.0], [19.7, 17520.0], [19.8, 17520.0], [19.9, 17520.0], [20.0, 17559.0], [20.1, 17559.0], [20.2, 17559.0], [20.3, 17559.0], [20.4, 17559.0], [20.5, 17559.0], [20.6, 17559.0], [20.7, 17559.0], [20.8, 17559.0], [20.9, 17559.0], [21.0, 17566.0], [21.1, 17566.0], [21.2, 17566.0], [21.3, 17566.0], [21.4, 17566.0], [21.5, 17566.0], [21.6, 17566.0], [21.7, 17566.0], [21.8, 17566.0], [21.9, 17566.0], [22.0, 17727.0], [22.1, 17727.0], [22.2, 17727.0], [22.3, 17727.0], [22.4, 17727.0], [22.5, 17727.0], [22.6, 17727.0], [22.7, 17727.0], [22.8, 17727.0], [22.9, 17727.0], [23.0, 19315.0], [23.1, 19315.0], [23.2, 19315.0], [23.3, 19315.0], [23.4, 19315.0], [23.5, 19315.0], [23.6, 19315.0], [23.7, 19315.0], [23.8, 19315.0], [23.9, 19315.0], [24.0, 19704.0], [24.1, 19704.0], [24.2, 19704.0], [24.3, 19704.0], [24.4, 19704.0], [24.5, 19704.0], [24.6, 19704.0], [24.7, 19704.0], [24.8, 19704.0], [24.9, 19704.0], [25.0, 20015.0], [25.1, 20015.0], [25.2, 20015.0], [25.3, 20015.0], [25.4, 20015.0], [25.5, 20015.0], [25.6, 20015.0], [25.7, 20015.0], [25.8, 20015.0], [25.9, 20015.0], [26.0, 20567.0], [26.1, 20567.0], [26.2, 20567.0], [26.3, 20567.0], [26.4, 20567.0], [26.5, 20567.0], [26.6, 20567.0], [26.7, 20567.0], [26.8, 20567.0], [26.9, 20567.0], [27.0, 20631.0], [27.1, 20631.0], [27.2, 20631.0], [27.3, 20631.0], [27.4, 20631.0], [27.5, 20631.0], [27.6, 20631.0], [27.7, 20631.0], [27.8, 20631.0], [27.9, 20631.0], [28.0, 20776.0], [28.1, 20776.0], [28.2, 20776.0], [28.3, 20776.0], [28.4, 20776.0], [28.5, 20776.0], [28.6, 20776.0], [28.7, 20776.0], [28.8, 20776.0], [28.9, 20776.0], [29.0, 20873.0], [29.1, 20873.0], [29.2, 20873.0], [29.3, 20873.0], [29.4, 20873.0], [29.5, 20873.0], [29.6, 20873.0], [29.7, 20873.0], [29.8, 20873.0], [29.9, 20873.0], [30.0, 21019.0], [30.1, 21019.0], [30.2, 21019.0], [30.3, 21019.0], [30.4, 21019.0], [30.5, 21019.0], [30.6, 21019.0], [30.7, 21019.0], [30.8, 21019.0], [30.9, 21019.0], [31.0, 21027.0], [31.1, 21027.0], [31.2, 21027.0], [31.3, 21027.0], [31.4, 21027.0], [31.5, 21027.0], [31.6, 21027.0], [31.7, 21027.0], [31.8, 21027.0], [31.9, 21027.0], [32.0, 21036.0], [32.1, 21036.0], [32.2, 21036.0], [32.3, 21036.0], [32.4, 21036.0], [32.5, 21036.0], [32.6, 21036.0], [32.7, 21036.0], [32.8, 21036.0], [32.9, 21036.0], [33.0, 21050.0], [33.1, 21050.0], [33.2, 21050.0], [33.3, 21050.0], [33.4, 21050.0], [33.5, 21050.0], [33.6, 21050.0], [33.7, 21050.0], [33.8, 21050.0], [33.9, 21050.0], [34.0, 21106.0], [34.1, 21106.0], [34.2, 21106.0], [34.3, 21106.0], [34.4, 21106.0], [34.5, 21106.0], [34.6, 21106.0], [34.7, 21106.0], [34.8, 21106.0], [34.9, 21106.0], [35.0, 21158.0], [35.1, 21158.0], [35.2, 21158.0], [35.3, 21158.0], [35.4, 21158.0], [35.5, 21158.0], [35.6, 21158.0], [35.7, 21158.0], [35.8, 21158.0], [35.9, 21158.0], [36.0, 21240.0], [36.1, 21240.0], [36.2, 21240.0], [36.3, 21240.0], [36.4, 21240.0], [36.5, 21240.0], [36.6, 21240.0], [36.7, 21240.0], [36.8, 21240.0], [36.9, 21240.0], [37.0, 21427.0], [37.1, 21427.0], [37.2, 21427.0], [37.3, 21427.0], [37.4, 21427.0], [37.5, 21427.0], [37.6, 21427.0], [37.7, 21427.0], [37.8, 21427.0], [37.9, 21427.0], [38.0, 21516.0], [38.1, 21516.0], [38.2, 21516.0], [38.3, 21516.0], [38.4, 21516.0], [38.5, 21516.0], [38.6, 21516.0], [38.7, 21516.0], [38.8, 21516.0], [38.9, 21516.0], [39.0, 21678.0], [39.1, 21678.0], [39.2, 21678.0], [39.3, 21678.0], [39.4, 21678.0], [39.5, 21678.0], [39.6, 21678.0], [39.7, 21678.0], [39.8, 21678.0], [39.9, 21678.0], [40.0, 21802.0], [40.1, 21802.0], [40.2, 21802.0], [40.3, 21802.0], [40.4, 21802.0], [40.5, 21802.0], [40.6, 21802.0], [40.7, 21802.0], [40.8, 21802.0], [40.9, 21802.0], [41.0, 21808.0], [41.1, 21808.0], [41.2, 21808.0], [41.3, 21808.0], [41.4, 21808.0], [41.5, 21808.0], [41.6, 21808.0], [41.7, 21808.0], [41.8, 21808.0], [41.9, 21808.0], [42.0, 21852.0], [42.1, 21852.0], [42.2, 21852.0], [42.3, 21852.0], [42.4, 21852.0], [42.5, 21852.0], [42.6, 21852.0], [42.7, 21852.0], [42.8, 21852.0], [42.9, 21852.0], [43.0, 22037.0], [43.1, 22037.0], [43.2, 22037.0], [43.3, 22037.0], [43.4, 22037.0], [43.5, 22037.0], [43.6, 22037.0], [43.7, 22037.0], [43.8, 22037.0], [43.9, 22037.0], [44.0, 22142.0], [44.1, 22142.0], [44.2, 22142.0], [44.3, 22142.0], [44.4, 22142.0], [44.5, 22142.0], [44.6, 22142.0], [44.7, 22142.0], [44.8, 22142.0], [44.9, 22142.0], [45.0, 22212.0], [45.1, 22212.0], [45.2, 22212.0], [45.3, 22212.0], [45.4, 22212.0], [45.5, 22212.0], [45.6, 22212.0], [45.7, 22212.0], [45.8, 22212.0], [45.9, 22212.0], [46.0, 23511.0], [46.1, 23511.0], [46.2, 23511.0], [46.3, 23511.0], [46.4, 23511.0], [46.5, 23511.0], [46.6, 23511.0], [46.7, 23511.0], [46.8, 23511.0], [46.9, 23511.0], [47.0, 23678.0], [47.1, 23678.0], [47.2, 23678.0], [47.3, 23678.0], [47.4, 23678.0], [47.5, 23678.0], [47.6, 23678.0], [47.7, 23678.0], [47.8, 23678.0], [47.9, 23678.0], [48.0, 23689.0], [48.1, 23689.0], [48.2, 23689.0], [48.3, 23689.0], [48.4, 23689.0], [48.5, 23689.0], [48.6, 23689.0], [48.7, 23689.0], [48.8, 23689.0], [48.9, 23689.0], [49.0, 23702.0], [49.1, 23702.0], [49.2, 23702.0], [49.3, 23702.0], [49.4, 23702.0], [49.5, 23702.0], [49.6, 23702.0], [49.7, 23702.0], [49.8, 23702.0], [49.9, 23702.0], [50.0, 23706.0], [50.1, 23706.0], [50.2, 23706.0], [50.3, 23706.0], [50.4, 23706.0], [50.5, 23706.0], [50.6, 23706.0], [50.7, 23706.0], [50.8, 23706.0], [50.9, 23706.0], [51.0, 23728.0], [51.1, 23728.0], [51.2, 23728.0], [51.3, 23728.0], [51.4, 23728.0], [51.5, 23728.0], [51.6, 23728.0], [51.7, 23728.0], [51.8, 23728.0], [51.9, 23728.0], [52.0, 23763.0], [52.1, 23763.0], [52.2, 23763.0], [52.3, 23763.0], [52.4, 23763.0], [52.5, 23763.0], [52.6, 23763.0], [52.7, 23763.0], [52.8, 23763.0], [52.9, 23763.0], [53.0, 23780.0], [53.1, 23780.0], [53.2, 23780.0], [53.3, 23780.0], [53.4, 23780.0], [53.5, 23780.0], [53.6, 23780.0], [53.7, 23780.0], [53.8, 23780.0], [53.9, 23780.0], [54.0, 23798.0], [54.1, 23798.0], [54.2, 23798.0], [54.3, 23798.0], [54.4, 23798.0], [54.5, 23798.0], [54.6, 23798.0], [54.7, 23798.0], [54.8, 23798.0], [54.9, 23798.0], [55.0, 23831.0], [55.1, 23831.0], [55.2, 23831.0], [55.3, 23831.0], [55.4, 23831.0], [55.5, 23831.0], [55.6, 23831.0], [55.7, 23831.0], [55.8, 23831.0], [55.9, 23831.0], [56.0, 23842.0], [56.1, 23842.0], [56.2, 23842.0], [56.3, 23842.0], [56.4, 23842.0], [56.5, 23842.0], [56.6, 23842.0], [56.7, 23842.0], [56.8, 23842.0], [56.9, 23842.0], [57.0, 23844.0], [57.1, 23844.0], [57.2, 23844.0], [57.3, 23844.0], [57.4, 23844.0], [57.5, 23844.0], [57.6, 23844.0], [57.7, 23844.0], [57.8, 23844.0], [57.9, 23844.0], [58.0, 23845.0], [58.1, 23845.0], [58.2, 23845.0], [58.3, 23845.0], [58.4, 23845.0], [58.5, 23845.0], [58.6, 23845.0], [58.7, 23845.0], [58.8, 23845.0], [58.9, 23845.0], [59.0, 23873.0], [59.1, 23873.0], [59.2, 23873.0], [59.3, 23873.0], [59.4, 23873.0], [59.5, 23873.0], [59.6, 23873.0], [59.7, 23873.0], [59.8, 23873.0], [59.9, 23873.0], [60.0, 23881.0], [60.1, 23881.0], [60.2, 23881.0], [60.3, 23881.0], [60.4, 23881.0], [60.5, 23881.0], [60.6, 23881.0], [60.7, 23881.0], [60.8, 23881.0], [60.9, 23881.0], [61.0, 23917.0], [61.1, 23917.0], [61.2, 23917.0], [61.3, 23917.0], [61.4, 23917.0], [61.5, 23917.0], [61.6, 23917.0], [61.7, 23917.0], [61.8, 23917.0], [61.9, 23917.0], [62.0, 23934.0], [62.1, 23934.0], [62.2, 23934.0], [62.3, 23934.0], [62.4, 23934.0], [62.5, 23934.0], [62.6, 23934.0], [62.7, 23934.0], [62.8, 23934.0], [62.9, 23934.0], [63.0, 23941.0], [63.1, 23941.0], [63.2, 23941.0], [63.3, 23941.0], [63.4, 23941.0], [63.5, 23941.0], [63.6, 23941.0], [63.7, 23941.0], [63.8, 23941.0], [63.9, 23941.0], [64.0, 23954.0], [64.1, 23954.0], [64.2, 23954.0], [64.3, 23954.0], [64.4, 23954.0], [64.5, 23954.0], [64.6, 23954.0], [64.7, 23954.0], [64.8, 23954.0], [64.9, 23954.0], [65.0, 23959.0], [65.1, 23959.0], [65.2, 23959.0], [65.3, 23959.0], [65.4, 23959.0], [65.5, 23959.0], [65.6, 23959.0], [65.7, 23959.0], [65.8, 23959.0], [65.9, 23959.0], [66.0, 24010.0], [66.1, 24010.0], [66.2, 24010.0], [66.3, 24010.0], [66.4, 24010.0], [66.5, 24010.0], [66.6, 24010.0], [66.7, 24010.0], [66.8, 24010.0], [66.9, 24010.0], [67.0, 24011.0], [67.1, 24011.0], [67.2, 24011.0], [67.3, 24011.0], [67.4, 24011.0], [67.5, 24011.0], [67.6, 24011.0], [67.7, 24011.0], [67.8, 24011.0], [67.9, 24011.0], [68.0, 24014.0], [68.1, 24014.0], [68.2, 24014.0], [68.3, 24014.0], [68.4, 24014.0], [68.5, 24014.0], [68.6, 24014.0], [68.7, 24014.0], [68.8, 24014.0], [68.9, 24014.0], [69.0, 24054.0], [69.1, 24054.0], [69.2, 24054.0], [69.3, 24054.0], [69.4, 24054.0], [69.5, 24054.0], [69.6, 24054.0], [69.7, 24054.0], [69.8, 24054.0], [69.9, 24054.0], [70.0, 24060.0], [70.1, 24060.0], [70.2, 24060.0], [70.3, 24060.0], [70.4, 24060.0], [70.5, 24060.0], [70.6, 24060.0], [70.7, 24060.0], [70.8, 24060.0], [70.9, 24060.0], [71.0, 24081.0], [71.1, 24081.0], [71.2, 24081.0], [71.3, 24081.0], [71.4, 24081.0], [71.5, 24081.0], [71.6, 24081.0], [71.7, 24081.0], [71.8, 24081.0], [71.9, 24081.0], [72.0, 24090.0], [72.1, 24090.0], [72.2, 24090.0], [72.3, 24090.0], [72.4, 24090.0], [72.5, 24090.0], [72.6, 24090.0], [72.7, 24090.0], [72.8, 24090.0], [72.9, 24090.0], [73.0, 24093.0], [73.1, 24093.0], [73.2, 24093.0], [73.3, 24093.0], [73.4, 24093.0], [73.5, 24093.0], [73.6, 24093.0], [73.7, 24093.0], [73.8, 24093.0], [73.9, 24093.0], [74.0, 24096.0], [74.1, 24096.0], [74.2, 24096.0], [74.3, 24096.0], [74.4, 24096.0], [74.5, 24096.0], [74.6, 24096.0], [74.7, 24096.0], [74.8, 24096.0], [74.9, 24096.0], [75.0, 24112.0], [75.1, 24112.0], [75.2, 24112.0], [75.3, 24112.0], [75.4, 24112.0], [75.5, 24112.0], [75.6, 24112.0], [75.7, 24112.0], [75.8, 24112.0], [75.9, 24112.0], [76.0, 24129.0], [76.1, 24129.0], [76.2, 24129.0], [76.3, 24129.0], [76.4, 24129.0], [76.5, 24129.0], [76.6, 24129.0], [76.7, 24129.0], [76.8, 24129.0], [76.9, 24129.0], [77.0, 24160.0], [77.1, 24160.0], [77.2, 24160.0], [77.3, 24160.0], [77.4, 24160.0], [77.5, 24160.0], [77.6, 24160.0], [77.7, 24160.0], [77.8, 24160.0], [77.9, 24160.0], [78.0, 24161.0], [78.1, 24161.0], [78.2, 24161.0], [78.3, 24161.0], [78.4, 24161.0], [78.5, 24161.0], [78.6, 24161.0], [78.7, 24161.0], [78.8, 24161.0], [78.9, 24161.0], [79.0, 24197.0], [79.1, 24197.0], [79.2, 24197.0], [79.3, 24197.0], [79.4, 24197.0], [79.5, 24197.0], [79.6, 24197.0], [79.7, 24197.0], [79.8, 24197.0], [79.9, 24197.0], [80.0, 24210.0], [80.1, 24210.0], [80.2, 24210.0], [80.3, 24210.0], [80.4, 24210.0], [80.5, 24210.0], [80.6, 24210.0], [80.7, 24210.0], [80.8, 24210.0], [80.9, 24210.0], [81.0, 24212.0], [81.1, 24212.0], [81.2, 24212.0], [81.3, 24212.0], [81.4, 24212.0], [81.5, 24212.0], [81.6, 24212.0], [81.7, 24212.0], [81.8, 24212.0], [81.9, 24212.0], [82.0, 24220.0], [82.1, 24220.0], [82.2, 24220.0], [82.3, 24220.0], [82.4, 24220.0], [82.5, 24220.0], [82.6, 24220.0], [82.7, 24220.0], [82.8, 24220.0], [82.9, 24220.0], [83.0, 24271.0], [83.1, 24271.0], [83.2, 24271.0], [83.3, 24271.0], [83.4, 24271.0], [83.5, 24271.0], [83.6, 24271.0], [83.7, 24271.0], [83.8, 24271.0], [83.9, 24271.0], [84.0, 24276.0], [84.1, 24276.0], [84.2, 24276.0], [84.3, 24276.0], [84.4, 24276.0], [84.5, 24276.0], [84.6, 24276.0], [84.7, 24276.0], [84.8, 24276.0], [84.9, 24276.0], [85.0, 24291.0], [85.1, 24291.0], [85.2, 24291.0], [85.3, 24291.0], [85.4, 24291.0], [85.5, 24291.0], [85.6, 24291.0], [85.7, 24291.0], [85.8, 24291.0], [85.9, 24291.0], [86.0, 24293.0], [86.1, 24293.0], [86.2, 24293.0], [86.3, 24293.0], [86.4, 24293.0], [86.5, 24293.0], [86.6, 24293.0], [86.7, 24293.0], [86.8, 24293.0], [86.9, 24293.0], [87.0, 24310.0], [87.1, 24310.0], [87.2, 24310.0], [87.3, 24310.0], [87.4, 24310.0], [87.5, 24310.0], [87.6, 24310.0], [87.7, 24310.0], [87.8, 24310.0], [87.9, 24310.0], [88.0, 24319.0], [88.1, 24319.0], [88.2, 24319.0], [88.3, 24319.0], [88.4, 24319.0], [88.5, 24319.0], [88.6, 24319.0], [88.7, 24319.0], [88.8, 24319.0], [88.9, 24319.0], [89.0, 24329.0], [89.1, 24329.0], [89.2, 24329.0], [89.3, 24329.0], [89.4, 24329.0], [89.5, 24329.0], [89.6, 24329.0], [89.7, 24329.0], [89.8, 24329.0], [89.9, 24329.0], [90.0, 24340.0], [90.1, 24340.0], [90.2, 24340.0], [90.3, 24340.0], [90.4, 24340.0], [90.5, 24340.0], [90.6, 24340.0], [90.7, 24340.0], [90.8, 24340.0], [90.9, 24340.0], [91.0, 24347.0], [91.1, 24347.0], [91.2, 24347.0], [91.3, 24347.0], [91.4, 24347.0], [91.5, 24347.0], [91.6, 24347.0], [91.7, 24347.0], [91.8, 24347.0], [91.9, 24347.0], [92.0, 24369.0], [92.1, 24369.0], [92.2, 24369.0], [92.3, 24369.0], [92.4, 24369.0], [92.5, 24369.0], [92.6, 24369.0], [92.7, 24369.0], [92.8, 24369.0], [92.9, 24369.0], [93.0, 24377.0], [93.1, 24377.0], [93.2, 24377.0], [93.3, 24377.0], [93.4, 24377.0], [93.5, 24377.0], [93.6, 24377.0], [93.7, 24377.0], [93.8, 24377.0], [93.9, 24377.0], [94.0, 24382.0], [94.1, 24382.0], [94.2, 24382.0], [94.3, 24382.0], [94.4, 24382.0], [94.5, 24382.0], [94.6, 24382.0], [94.7, 24382.0], [94.8, 24382.0], [94.9, 24382.0], [95.0, 24399.0], [95.1, 24399.0], [95.2, 24399.0], [95.3, 24399.0], [95.4, 24399.0], [95.5, 24399.0], [95.6, 24399.0], [95.7, 24399.0], [95.8, 24399.0], [95.9, 24399.0], [96.0, 24428.0], [96.1, 24428.0], [96.2, 24428.0], [96.3, 24428.0], [96.4, 24428.0], [96.5, 24428.0], [96.6, 24428.0], [96.7, 24428.0], [96.8, 24428.0], [96.9, 24428.0], [97.0, 24457.0], [97.1, 24457.0], [97.2, 24457.0], [97.3, 24457.0], [97.4, 24457.0], [97.5, 24457.0], [97.6, 24457.0], [97.7, 24457.0], [97.8, 24457.0], [97.9, 24457.0], [98.0, 24557.0], [98.1, 24557.0], [98.2, 24557.0], [98.3, 24557.0], [98.4, 24557.0], [98.5, 24557.0], [98.6, 24557.0], [98.7, 24557.0], [98.8, 24557.0], [98.9, 24557.0], [99.0, 24697.0], [99.1, 24697.0], [99.2, 24697.0], [99.3, 24697.0], [99.4, 24697.0], [99.5, 24697.0], [99.6, 24697.0], [99.7, 24697.0], [99.8, 24697.0], [99.9, 24697.0]], "isOverall": false, "label": "Create Issue User 100 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 12300.0, "maxY": 9.0, "series": [{"data": [[12300.0, 2.0], [12500.0, 3.0], [13400.0, 1.0], [13600.0, 1.0], [14100.0, 3.0], [14300.0, 1.0], [14400.0, 1.0], [14600.0, 1.0], [15100.0, 1.0], [15400.0, 1.0], [16400.0, 1.0], [17300.0, 1.0], [17400.0, 1.0], [17500.0, 4.0], [17700.0, 1.0], [19300.0, 1.0], [19700.0, 1.0], [20000.0, 1.0], [20600.0, 1.0], [20500.0, 1.0], [20700.0, 1.0], [21000.0, 4.0], [20800.0, 1.0], [21100.0, 2.0], [21200.0, 1.0], [21400.0, 1.0], [21500.0, 1.0], [21600.0, 1.0], [21800.0, 3.0], [22000.0, 1.0], [22100.0, 1.0], [22200.0, 1.0], [23500.0, 1.0], [23800.0, 6.0], [23700.0, 6.0], [23600.0, 2.0], [23900.0, 5.0], [24000.0, 9.0], [24100.0, 5.0], [24200.0, 7.0], [24300.0, 9.0], [24400.0, 2.0], [24500.0, 1.0], [24600.0, 1.0]], "isOverall": false, "label": "Create Issue User 100 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.63, "minX": 1.7158458E12, "maxY": 50.63, "series": [{"data": [[1.7158458E12, 50.63]], "isOverall": false, "label": "User 100 Ramp 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158458E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 12335.0, "minX": 1.0, "maxY": 24697.0, "series": [{"data": [[4.0, 24326.333333333332], [5.0, 24377.0], [6.0, 24399.0], [7.0, 24557.0], [9.0, 24402.0], [10.0, 24293.0], [11.0, 24271.0], [12.0, 24212.0], [13.0, 24090.0], [14.0, 24369.0], [15.0, 24319.0], [17.0, 24352.0], [19.0, 24231.5], [20.0, 23934.0], [21.0, 23954.0], [22.0, 24011.0], [23.0, 24160.0], [24.0, 24129.0], [25.0, 24197.0], [26.0, 24014.0], [29.0, 24150.666666666668], [30.0, 24093.0], [31.0, 24161.0], [33.0, 23970.5], [35.0, 23873.0], [34.0, 23763.0], [37.0, 24210.0], [36.0, 23917.0], [39.0, 23678.0], [38.0, 24060.0], [41.0, 23844.0], [40.0, 23706.0], [43.0, 24010.0], [42.0, 24112.0], [45.0, 24054.0], [44.0, 23881.0], [47.0, 23842.0], [46.0, 23831.0], [49.0, 23824.0], [51.0, 23702.0], [50.0, 23780.0], [53.0, 23728.0], [52.0, 23511.0], [55.0, 22212.0], [54.0, 23798.0], [57.0, 22037.0], [56.0, 22142.0], [59.0, 21802.0], [58.0, 21852.0], [61.0, 21678.0], [60.0, 21808.0], [63.0, 21427.0], [62.0, 21516.0], [67.0, 21036.0], [66.0, 21240.0], [65.0, 21158.0], [64.0, 21050.0], [71.0, 21019.0], [70.0, 20873.0], [69.0, 21027.0], [68.0, 21106.0], [75.0, 20015.0], [74.0, 20567.0], [73.0, 20776.0], [72.0, 20631.0], [79.0, 17566.0], [78.0, 17727.0], [77.0, 19315.0], [76.0, 19704.0], [83.0, 17520.0], [82.0, 17493.5], [80.0, 17559.0], [87.0, 15176.0], [86.0, 15401.0], [85.0, 16433.0], [84.0, 17322.0], [91.0, 14195.0], [90.0, 14359.0], [89.0, 14404.0], [88.0, 14632.0], [95.0, 13496.0], [94.0, 13674.0], [93.0, 14100.0], [92.0, 14140.0], [99.0, 12365.0], [98.0, 12549.0], [96.0, 12586.0], [100.0, 12335.0], [1.0, 24697.0]], "isOverall": false, "label": "Create Issue User 100 Ramp 1", "isController": false}, {"data": [[50.63, 21315.940000000006]], "isOverall": false, "label": "Create Issue User 100 Ramp 1-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2781.6666666666665, "minX": 1.7158458E12, "maxY": 5705.0, "series": [{"data": [[1.7158458E12, 5705.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7158458E12, 2781.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158458E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 21315.940000000006, "minX": 1.7158458E12, "maxY": 21315.940000000006, "series": [{"data": [[1.7158458E12, 21315.940000000006]], "isOverall": false, "label": "Create Issue User 100 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158458E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 21315.670000000002, "minX": 1.7158458E12, "maxY": 21315.670000000002, "series": [{"data": [[1.7158458E12, 21315.670000000002]], "isOverall": false, "label": "Create Issue User 100 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158458E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.12, "minX": 1.7158458E12, "maxY": 3.12, "series": [{"data": [[1.7158458E12, 3.12]], "isOverall": false, "label": "Create Issue User 100 Ramp 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158458E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12335.0, "minX": 1.7158458E12, "maxY": 24697.0, "series": [{"data": [[1.7158458E12, 24697.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7158458E12, 12335.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7158458E12, 24338.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7158458E12, 24695.6]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7158458E12, 23704.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7158458E12, 24398.15]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12549.0, "minX": 1.0, "maxY": 24340.0, "series": [{"data": [[2.0, 14425.0], [1.0, 17874.0], [35.0, 23941.0], [19.0, 24340.0], [5.0, 12549.0], [6.0, 18217.0], [3.0, 20015.0], [13.0, 21050.0], [7.0, 17520.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12549.0, "minX": 1.0, "maxY": 24339.0, "series": [{"data": [[2.0, 14425.0], [1.0, 17874.0], [35.0, 23940.0], [19.0, 24339.0], [5.0, 12549.0], [6.0, 18217.0], [3.0, 20014.0], [13.0, 21049.0], [7.0, 17520.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7158458E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7158458E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158458E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7158458E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7158458E12, 1.6666666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7158458E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7158458E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7158458E12, 1.6666666666666667]], "isOverall": false, "label": "Create Issue User 100 Ramp 1-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158458E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7158458E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7158458E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7158458E12, "title": "Total Transactions Per Second"}},
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

