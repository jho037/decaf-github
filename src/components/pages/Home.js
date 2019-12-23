import React, { Component } from 'react'
import './Home.css';
import { Timeline } from 'react-twitter-widgets'

class Home extends Component {
    render() {
        return (
            <div className="Summary">
            
            <h1>DECAF</h1>
            <h2>(Dynamic Executable Code Analysis Framework)</h2>
            
            <p>DECAF++, the new version of DECAF, taint analysis is around 2X faster making it the fastest,
            to the best of our knowledge, whole-system dynamic taint analysis framework. This results in 
            a much better usability imposing only 4% overhead (SPEC CPU2006) when no suspicious (tainted) 
            input exists. Even under heavy taint analysis workloads, DECAF++ has a much better performance,
            around 25% faster on nbench, because of its elasticity. DECAF++ elasticity makes it a very suitable
            case for security analysis tasks that would selectively analyze the input e.g. Intrusion Detection Systems (IDS)
            that can filter out benign traffic. For further technical details, see our <a href="https://www.cs.ucr.edu/~adava003/RAID__Elastic_Whole_System_Dynamic_Taint_Analysis.pdf">Raid 2019 paper.</a>
             To activate the optimizations, see our <a href="https://github.com/decaf-project/DECAF/wiki/DECAF--plus-plus">DECAF++ Wiki</a> page.
            </p>

            <img src="https://raw.githubusercontent.com/decaf-project/DECAF/master/docs/SPEC.png"></img>

                  <Timeline
                    dataSource={{
                    sourceType: 'profile',
                    screenName: 'heng_yin'
                    }}
                    options={{
                    height: '800'
                    }}
                />
        </div>
        )
    }
}
export default Home;
