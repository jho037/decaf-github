import React, { Component } from 'react'
import './Publications.css';

class Publications extends Component {
    render() {
        return (
            <div className="Pub">
            <h>Publications</h>
            <p>1. Ali Davanian, Zhenxiao Qi, Yu Qu, and Heng Yin, DECAF++: Elastic Whole-System Dynamic Taint Analysis, In the 22nd International Symposium on Research in Attacks, Intrusions and Defenses (RAID), September 2019. <b>(If you wish to cite the new optimized version of DECAF, please cite this paper)</b></p>
            <p>2. "Make it work, make it right, make it fast: building a platform-neutral whole-system dynamic binary analysis platform", Andrew Henderson, Aravind Prakash, Lok Kwong Yan, Xunchao Hu, Xujiewen Wang, Rundong Zhou, and Heng Yin, to appear in the International Symposium on Software Testing and Analysis (ISSTA'14), San Jose, CA, July 2014. <b>(If you wish to cite DECAF, please cite this paper)</b></p>
            <p>3. Lok Kwong Yan, Andrew Henderson, Xunchao Hu, Heng Yin, and Stephen McCamant?.On soundness and precision of dynamic taint analysis. Technical Report SYR-EECS-2014-04, Syracuse University, January 2014.</p>
            <p>4. DroidScope: Seamlessly Reconstructing OS and Dalvik Semantic Views for Dynamic Android Malware Analysis", Lok-Kwong Yan and Heng Yin, in the 21st USENIX Security Symposium, Bellevue, WA, August 8-10, 2012.</p>
        </div>
        )
    }
}
export default Publications;
