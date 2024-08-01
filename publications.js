publications = {
    "Journal Articles": {
		"j8":{
            "title": "Collaborative Decision-Making and the k-Strong Price of Anarchy in Common Interest Games",
            "authors": "<b>B. L. Ferguson</b>, D. Paccagnan, B. S. R. Pradelski, and J. R. Marden",
            "conference": "IEEE TAC",
            "conferencelong": "IEEE Transactions on Automatic Control",
            "date": "2024",
            "status": "under review",
            "pdfFile": "",
            "url": "https://arxiv.org/pdf/2311.01379.pdf",
            "abstract": "The control of large-scale, multi-agent systems often entails distributing decision-making across the system components. However, with advances in communication and computation technologies, we can consider new collaborative decision-making paradigms that exist somewhere between centralized and distributed control. In this work, we seek to understand the benefits and costs of increased collaborative communication in multi-agent systems. We specifically study this in the context of common interest games in which groups of up to k agents can coordinate their actions in maximizing the common objective function. The equilibria that emerge in these systems are the k-strong Nash equilibria of the common interest game; studying the properties of these states can provide relevant insights into the efficacy of inter-agent collaboration. Our contributions come threefold: 1) provide bounds on how well k-strong Nash equilibria approximate the optimal system welfare, formalized by the k-strong price of anarchy, 2) study the run-time and transient performance of collaborative agent-based dynamics, and 3) consider the task of redesigning objectives for groups of agents which improve system performance. We study these three facets generally as well as in the context of resource allocation problems, in which we provide tractable linear programs that give tight bounds on the k-strong price of anarchy."
        },
		"j7":{
            "title": "Information and Incentive Co-design: How Taxes Can Aid Information Provisioning",
            "authors": "<b>B. L. Ferguson</b>, P. N. Brown, and J. R. Marden",
            "conference": "IEEE T-ITS",
            "conferencelong": "IEEE Transactions on Intelligent Transportation Systems",
            "date": "2024",
            "status": "published",
            "pdfFile": "./publications/Information_Signaling_With_Concurrent_Monetary_Incentives_in_Bayesian_Congestion_Games.pdf",
            "url": "https://ieeexplore.ieee.org/abstract/document/10494719",
            "abstract": "The uncertainty held by a system’s users can cause ineffective decision-making. Nowhere is this more apparent than in transportation networks, where drivers’ uncertainty over current road/traffic conditions can negatively alter their routing choices. To alleviate this, an informed system operator may signal information to uninformed users to persuade them into taking more preferable actions (e.g., Google/Apple maps providing live traffic updates). In this work, we study public signalling mechanisms in the context of Bayesian congestion games. We observe the phenomenon that though revealing information can reduce system cost in some settings, in others, it can induce worse performance than not signalling at all. However, we find an important relationship between information signalling and monetary incentives: by utilizing both mechanisms concurrently, the system operator can guarantee that revealing information does not worsen performance. We prove these findings in a general class of Bayesian congestion games. To understand the magnitude at which information signalling can affect system performance, we put a deeper focus in the class of parallel networks with polynomial latency functions and analytically characterize bounds on the change in system cost from signalling. Finally, we consider the problem of solving for optimal signals with and without the concurrent use of monetary incentives. We construct solvable optimization problems whose solutions give optimal signalling policies even when the signalling policy is limited in its support; we then quantify the benefit of these and other signalling mechanisms in numerical examples."
        },
        "j6":{
            "title": "The Cost of Informing Decision-Makers in Multi-Agent Maximum Coverage Problems with Random Resource Values",
            "authors": "<b>B. L. Ferguson</b>, D. Paccagnan, and J. R. Marden",
            "conference": "LCSS",
            "conferencelong": "IEEE Control Systems Letters",
            "date": "2023",
            "status": "accpeted",
            "pdfFile": "https://arxiv.org/pdf/2306.12603.pdf",
            "url": "https://arxiv.org/abs/2306.12603",
            "abstract": "The emergent behavior of a distributed sys- tem is conditioned by the information available to the local decision-makers. Therefore, one may expect that providing decision-makers with more information will improve system performance; in this work, we find that this is not necessar- ily the case. In multi-agent maximum coverage problems, we find that even when agents’ objectives are aligned with the global welfare, informing agents about the realization of the resource’s random values can reduce equilibrium performance by a factor of 1/2. This affirms an important as- pect of designing distributed systems: information need be shared carefully. We further this understanding by provid- ing lower and upper bounds on the ratio of system welfare when information is (fully or partially) revealed and when it is not, termed the value-of-informing. We then identify a trade-off that emerges when optimizing the performance of the best-case and worst-case equilibrium."
        },
		"j5":{
            "title": "Robust Utility Design in Distributed Resource Allocation Problems with Defective Agents",
            "authors": "<b>B. L. Ferguson</b> and J. R. Marden",
            "conference": "DGAA",
            "conferencelong": "Dynamic Games and Applications",
            "date": "2022",
            "status": "published",
            "pdfFile": "./publications/Ferguson2022_robust.pdf",
            "url": "https://link.springer.com/article/10.1007/s13235-022-00470-y",
            "abstract": "The use of multi-agent systems to solve large-scale problems can be an effective method to reduce physical and computational burdens; however, these systems should be robust to sub-system failures. In this work, we consider the problem of designing utility functions, which agents seek to maximize, as a method of distributed optimization in resource allocation problems. Though recent work has shown that optimal utility design can bring system operation into a reasonable approximation of optimal, our results extend the existing literature by investigating how robust the sys- tem's operation is to defective agents and by quantifying the achievable performance guarantees in this setting. Interestingly, we find that there is a trade-off between improving the robustness of the utility design and of- fering good nominal performance.We characterize this trade-off in the set of resource covering problems and find that there are considerable gains in robustness that can be made by sacriffcing some nominal performance."
			},
		"j4":{
            "title": "The Effectiveness of Subsidies and Tolls in Congestion Games",
            "authors": "<b>B. L. Ferguson</b>, P. N. Brown, and J. R. Marden",
            "conference": "IEEE TAC",
            "conferencelong": "IEEE Transactions on Automatic Control",
            "date": "2021",
            "status": "published",
            "pdfFile": "./publications/Ferguson2021_subsvstolls.pdf",
            "url": "https://ieeexplore.ieee.org/document/9451652",
            "abstract": "Are rewards or penalties more effective in influencing user behavior? This work compares the effectiveness of subsidies and tolls in incentivizing user behavior in congestion games. The predominantly studied method of influencing user behavior in network routing problems is to institute taxes which alter users’ observed costs in a manner that causes their selfinterested choices to more closely align with a system-level objective. Another conceivable method to accomplish the same goal is to subsidize the users’ actions that are preferable from a system-level perspective. We show that, when users behave similarly and predictably, subsidies offer superior performance guarantees to tolls under similar budgetary constraints; however, in the presence of unknown player heterogeneity, subsidies fail to offer the same robustness as tolls."
			},
		"j3":{
            "title": "The Effectiveness of Subsidies and Taxes in Atomic Congestion Games",
            "authors": "<b>B. L. Ferguson</b>, P. N. Brown, and J. R. Marden",
            "conference": "IEEE L-CSS",
            "conferencelong": "IEEE Control System Letters (L-CSS)",
            "date": "2021",
            "status": "published",
            "pdfFile": "./publications/Ferguson2021_atomic.pdf",
            "url": "https://ieeexplore.ieee.org/document/9442843",
            "abstract": "Are subsidies or taxes more effective at influencing user behavior? To answer this question, we focus on the well-studied framework of atomic congestion games which model resource allocation problems in noncooperative environments. Examples of such resource allocation problems include transportation networks, task assignment, content distribution systems, among others. Monetary incentives, in the form of taxes or subsidies, are commonly employed in such systems to influence selfinterested behavior and improve system efficiency. Our first result demonstrates that subsidies can provide strong improvement guarantees when compared to taxes of a similar magnitude. While interesting, our second result demonstrates that this improvements come at the expense of robustness. In particular, taxes provide greater robustness guarantees to mischaracterizations in the societal response when compared to subsidies. Hence, whether a system operator should employ taxes or subsidies depends intimately on the knowledge of the us r population."
			},
        "j2":{
            "title": "Optimal taxes in congestion games",
            "authors": "D. Paccagnan, R. Chandan, <b>B. L. Ferguson</b>, and J. R. Marden",
            "conference": "ACM TEAC",
            "conferencelong": "ACM Transactions on Economics and Computation (TEAC)",
            "date": "2021",
            "status": "published",
            "pdfFile": "./publications/Paccagnan2021_optimal.pdf",
            "url": "https://dl.acm.org/doi/10.1145/3457168?sid=SCITRUS",
            "abstract": "How can we design mechanisms to promote efficient use of shared resources? Here, we answer this question in relation to the well-studied class of atomic congestion games, used to model a variety of problems, including traffic routing. Within this context, a methodology for designing tolling mechanisms that minimize the system inefficiency (price of anarchy) exploiting solely local information is so far missing in spite of the scientific interest. In this manuscript we resolve this problem through a tractable linear programming formulation that applies to and beyond polynomial congestion games. When specializing our approach to the polynomial case, we obtain tight values for the optimal price of anarchy and corresponding tolls, uncovering an unexpected link with load balancing games. We also derive optimal tolling mechanisms that are constant with the congestion level, generalizing the results of [8] to polynomial congestion games and beyond. Finally, we apply our techniques to compute the efficiency of the marginal cost mechanism. Surprisingly, optimal tolling mechanism using only local information perform closely to existing mechanism that utilize global information [6], while the marginal cost mechanism, known to be optimal in the continuous-flow model, has lower efficiency than that encountered levying no toll. All results are tight for pure Nash equilibria, and extend to coarse correlated equilibria."
        },
        "j1":{
            "title": "Value of Information in Incentive Design: A Case-Study in Simple Congestion Networks",
            "authors": "<b>B. L. Ferguson</b>, P. N. Brown, and J. R. Marden",
            "conference": "IEEE TCSS",
            "conferencelong": "IEEE Transactions on Computational Social Systems (TCSS)",
            "date": "2023",
            "status": "accepted",
            "pdfFile": "./publications/Value_of_Information_in_Incentive_Design_A_Case_Study_in_Simple_Congestion_Networks.pdf",
            "url": "https://ieeexplore.ieee.org/abstract/document/10231080",
            "abstract": "It is well-known that system performance can experience significant degradation from the self-interested choices of users. Accordingly, in this manuscript we study the question of how a system operator can exploit system-level knowledge to derive incentives to influence societal behavior and improve system performance. Throughout, we focus on a simple class of routing games where the system operator has uncertainty regarding the network characteristics (i.e., latency functions) and population characteristics (i.e., sensitivity to monetary taxes). Specifically, we address the question of what information can be most effectively exploited in the design of taxation mechanisms to improve system performance. Our main results characterize an optimal marginal-cost taxation mechanism and associated performance guarantee for varying levels of network and population information. The value of a piece of information cannot be known a priori, so we adopt a worst-case interpretation of the value a piece of information is guaranteed to provide. Several interesting observations emerge about the relative value of information, including the fact that the value of population information saturates unless we also acquire more network knowledge."
			}
    },
    "Peer-Reviewed Conference Articles":{
		"c13":{
            "title": "Collaborative Coalitions in Multi-Agent Systems: Quantifying the Strong Price of Anarchy for Resource Allocation Games,",
            "authors": "<b>B. L. Ferguson</b>, D. Paccagnan, B. S. R. Pradelski, J. R. Marden",
            "conference": "CDC",
            "conferencelong": "62nd IEEE Conference on Decision and Control",
            "date": "2023",
            "status": "accepted",
            "pdfFile": "https://arxiv.org/pdf/2308.08045.pdf",
            "url": "https://arxiv.org/abs/2308.08045",
            "abstract": "The emergence of new communication technologies allows us to expand our understanding of distributed control and consider collaborative decision-making paradigms. With collaborative algorithms, certain local decision-making entities (or agents) are enabled to communicate and collaborate their actions with one another to attain better system behavior. By limiting the amount of communication, these algorithms exist somewhere between centralized and fully distributed approaches. To understand the possible benefits of this inter-agent collaboration, we model a multi-agent system as a commoninterest game in which groups of agents can collaborate their action to jointly increase the system welfare. We specifically consider k-strong Nash equilibria as the emergent behavior of these systems and address how well these states approximate the system optimal, formalized by the k-strong price of anarchy ratio. Our main contributions are in generating tight bounds on the k-strong price of anarchy in finite resource allocation games as the solution to a tractable linear program. By varying k –the maximum size of a collaborative coalition– we observe exactly how much performance is gained from inter-agent collaboration. To investigate further opportunities for improvement, we generate upper bounds on the maximum attainable k-strong price of anarchy when the agents’ utility function can be designed."
			},
		"c12":{
            "title": "Markov Games with Decoupled Dynamics: Price of Anarchy and Sample Complexity,",
            "authors": "R. Zhang, Y. Zhang, R. Konda, <b>B. L. Ferguson</b>, J. R. Marden, N. Li",
            "conference": "CDC",
            "conferencelong": "62nd IEEE Conference on Decision and Control",
            "date": "2023",
            "status": "accepted",
            "pdfFile": "https://arxiv.org/pdf/2304.03840.pdf",
            "url": "https://arxiv.org/pdf/2304.03840.pdf",
            "abstract": "This paper studies the finite-time horizon Markov games where the agents’ dynamics are decoupled but the rewards can possibly be coupled across agents. The policy class is restricted to local policies where agents make decisions using their local state. We first introduce the notion of smooth Markov games which extends the smoothness argument for normal form games ( [1], [2]) to our setting, and leverage the smoothness property to bound the price of anarchy of the Markov game. For a specific type of Markov game called the Markov potential game, we also develop a distributed learning algorithm, multi-agent soft policy iteration (MA-SPI), which provably converges to a Nash equilibrium. Sample complexity of the algorithm is also provided. Lastly, our results are validated using a dynamic covering game."
			},
		"c11":{
            "title": "Path Defense in Dynamic Defender-Attacker Blotto Games (dDAB) with Limited Information,",
            "authors": "A.K. Chen*, <b>B. L. Ferguson</b>*, D. Shishika, M. Dorothy, J. R. Marden, G. J. Pappas, and V. Kumar",
            "conference": "ACC",
            "conferencelong": "American Control Conference",
            "date": "2023",
            "status": "published",
            "pdfFile": "./publications/Chen2022_path.pdf",
            "url": "https://arxiv.org/abs/2204.04176",
            "abstract": "We consider a path guarding problem in dynamic Defender-Attacker Blotto games (dDAB), where a team of robots must defend a path in a graph against adversarial agents. Multi-robot systems are particularly well suited to this application, as recent work has shown the effectiveness of these systems in related areas such as perimeter defense and surveillance. When designing a defender policy that guarantees the defense of a path, information about the adversary and the environment can be helpful and may reduce the number of resources required by the defender to achieve a sufficient level of security. In this work, we characterize the necessary and sufficient number of assets needed to guarantee the defense of a shortest path between two nodes in dDAB games when the defender can only detect assets within k-hops of a shortest path. By characterizing the relationship between sensing horizon and required resources, we show that increasing the sensing capability of the defender greatly reduces the number of defender assets needed to defend the path."
			},
		"c10":{
            "title": "Ensuring the Defense of Paths and Perimeters in Dynamic Defender-Attacker Blotto Games (dDAB) on Graphs",
            "authors": "<b>B. L. Ferguson</b>, D. Shishika, and J. R. Marden",
            "conference": "Allerton",
            "conferencelong": "58th Annual Allerton Conference on Communication, Control, and Computing",
            "date": "2022",
            "status": "published",
            "pdfFile": "./publications/Ferguson2022_ddab.pdf",
            "url": "https://ieeexplore.ieee.org/abstract/document/9929422",
            "abstract": "When can we defend a region of space from being breached by an adversary? To answer this, we consider the Dynamic Defender-Attacker Blotto Game (dDAB) played on a graph, in which a fleet of defensive assets must be maneuvered through a network with the objective of defending a specified set of nodes from an adversarial fleet. In this framework, we seek to understand how the defender's objective (which nodes to defend in the graph) affects the amount of resources required to provide a safety guarantee. Particularly, we are interested in understanding how to defend paths-through and perimeters-of regions of space. Using the dDAB framework, we show the necessary and sufficient size of the defender's fleet needed to guarantee the defense of line graphs and cycle graphs, respectively. Then we show how these results can be viewed through a spatial interpretation to give insights on defense strategies in 2-Dimensional spaces. We find that more defender assets are needed for paths that are less direct (longer than the shortest path) and perimeters that have nooks and crevasses (non-convex)."
			},
        "c9":{
            "title": "Avoiding Unintended Consequences: How Incentives Aid Information Provisioning in Bayesian Congestion Games",
            "authors": "<b>B. L. Ferguson</b>, P. N. Brown, and J. R. Marden",
            "conference": "CDC",
            "conferencelong": "61st IEEE Conference on Decision and Control",
            "date": "2022",
            "status": "published",
            "pdfFile": "./publications/Ferguson2022_avoid.pdf",
            "url": "https://ieeexplore.ieee.org/abstract/document/9992777",
            "abstract": "When users lack specific knowledge of various system parameters, their uncertainty may lead them to make undesirable deviations in their decision making. To alleviate this, an informed system operator may elect to signal information to uninformed users with the hope of persuading them to take more preferable actions. In this work, we study public and truthful signalling mechanisms in the context of Bayesian congestion games on parallel networks. We provide bounds on the possible benefit a signalling policy can provide with and without the concurrent use of monetary incentives. We find that though revealing information can reduce system cost in some settings, it can also be detrimental and cause worse performance than not signalling at all. However, by utilizing both signalling and incentive mechanisms, the system operator can guarantee that revealing information does not worsen performance while offering similar opportunities for improvement. These findings emerge from the closed form bounds we derive on the benefit a signalling policy can provide. We provide a numerical example which illustrates the phenomenon that revealing more information can degrade performance when incentives are not used and improves performance when incentives are used."
			},
		"c8":{
            "title": "Robust Utility Design in Distributed Resource Allocation Problems with Defective Agents",
            "authors": "<b>B. L. Ferguson</b> and J. R. Marden",
            "conference": "CDC",
            "conferencelong": "60th IEEE Conference on Decision and Control",
            "date": "2021",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/Ferguson2021_DefectiveAgents.pdf",
            "url": "https://ieeexplore.ieee.org/document/9683732",
            "abstract": "The use of multi-agent systems to solve largescale problems can be an effective method to reduce physical and computational burdens; however, these systems should be robust to sub-system failures. In this work, we consider the problem of designing utility functions, which agents seek to maximize, as a method of distributed optimization in resource allocation problems. Though recent work has shown that optimal utility design can bring system operation into a reasonable approximation of optimal, our results extend the existing literature by investigating how robust the system’s operation is to defective agents and by quantifying the achievable performance guarantees in this setting. Interestingly, we find that there is a trade-off between improving the robustness of the utility design and offering good nominal performance. We characterize this trade-off in the set of resource covering problems and find that there are considerable gains in robustness that can be made by sacrificing some nominal performance."
			},
		"c7":{
            "title": "Incentive Design for Congestion Games with Unincentivizable Users",
            "authors": "Y. Yue, <b>B. L. Ferguson</b>, and J. R. Marden",
            "conference": "CDC",
            "conferencelong": "60th IEEE Conference on Decision and Control",
            "date": "2021",
            "status": "in proceedings",
            "pdfFile": "./publications/Yue2021_Unincentivizable.pdf",
            "url": "https://ieeexplore.ieee.org/document/9682974",
            "abstract": "Incentives are an effective tool to alter user preferences to promote more efficient group behavior. It is often assumed that these incentives can be levied on any and every user in the system; in many settings, this is not the case. Accordingly, how should a system operator design incentives that only affect a fraction of the users? The network routing literature contains many results showing the effectiveness of monetary taxes to influence self-interested users’ behavior and improve system efficiency. These results typically assume that all users in the network are influenced by incentives; however, this need not be the case if incentives are opted into or if some users do not experience or are unaffected by monetary fees. In this work, we address the problem of designing incentives for populations of users where a fraction of the population is not influenced by incentives in their decision-making process. By focusing on the setting of parallel-network selfish routing problems, surprisingly we find that the tolls that are optimal when the full population is incentivizable remain optimal when only a fraction of the population is incentivizable, though at reduced effectiveness. To measure the impact that the unincentivizable users have on the efficacy of the optimal tolling scheme, we derive worst-case performance bounds in a simple class of networks when only a fraction of the users can be incentivized."
			},
		"c6":{
            "title": "The Impact of Fairness on Performance in Congestion Networks",
            "authors": "<b>B. L. Ferguson</b> and J. R. Marden",
            "conference": "ACC",
            "conferencelong": "The American Control Conference",
            "date": "2021",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/Ferguson2021_fair.pdf",
            "url": "https://ieeexplore.ieee.org/document/9483197",
            "abstract": "How do incentives that are designed to improve system performance affect fairness among users? Operators of traffic systems are typically concerned with a spectrum of performance metrics including aggregate congestion levels, fairness, and monetary expenditures. In this work, we focus on the design of taxation mechanisms to optimize both aggregate congestion levels as well as fairness, where fairness is defined as a measure of the difference between the quality of service of similar users in the system. Specifically, we derive the explicit trade-off between the performance guarantee and worst-case unfairness when designing a tolling scheme, showing that improved performance guarantees cause increased unfairness. Additionally, we find this relationship in the settings where the toll designer is informed and uninformed on the populations price sensitivities; by comparing the two, one can observe the value of this information when designing fair and good performing tolls."
			},
		"c5":{
            "title": "Carrots or Sticks? The Effectiveness of Subsidies and Tolls in Congestion Games",
            "authors": "<b>B. L. Ferguson</b>, P. N. Brown, and J. R. Marden",
            "conference": "ACC",
            "conferencelong": "The American Control Conference",
            "date": "2020",
            "status": "in proceedings, presented <b>[Best Student Paper Finalist]</b>",
            "pdfFile": "./publications/Ferguson2020_carrots.pdf",
            "url": "https://ieeexplore.ieee.org/document/9147293",
            "abstract": "Are rewards or penalties more effective in influencing user behavior? This work compares the effectiveness of subsidies and tolls in incentivizing users in congestion games. The predominantly studied method of influencing user behavior in network routing problems is to institute taxes which alter users’ observed costs in a manner that causes their self-interested choices to more closely align with a system-level objective. Another feasible method to accomplish the same goal is to subsidize the users’ actions that are preferable from a system-level perspective. We show that, when users behave similarly and predictably, subsidies offer comparable performance guarantees to tolls while requiring smaller monetary transactions with users; however, in the presence of unknown player heterogeneity, subsidies fail to offer the same performance as tolls. We further investigate these relationships in affine congestion games, deriving explicit performance bounds under optimal tolls and subsidies with and without user heterogeneity; we show that the differences in performance can be significant."
			},
		"c4":{
            "title": "Computing Optimal Taxes in Atomic Congestion Games",
            "authors": "R. Chandan, D. Paccagnan, <b>B. L. Ferguson</b>, and J. R. Marden",
            "conference": "NetEcon",
            "conferencelong": "The 14th Workshop on the Economics of Networks, Systems and Computation",
            "date": "2020",
            "status": "in proceedings,</b>",
            "pdfFile": "https://netecon19.inria.fr/files/2019/06/article-2-chandan.pdf",
            "url": "https://netecon19.inria.fr/files/2019/06/article-2-chandan.pdf",
            "abstract": ""
			},
		"c3":{
            "title": "Utilizing Information Optimally to Influence Distributed Network Routing",
            "authors": "<b>B. L. Ferguson</b>, P. N. Brown, and J. R. Marden",
            "conference": "CDC",
            "conferencelong": "IEEE 58th Conference on Decision and Control (CDC)",
            "date": "2019",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/Ferguson2019.pdf",
            "url": "https://ieeexplore.ieee.org/document/9029569",
            "abstract": "How can a system designer exploit system-level knowledge to derive incentives to optimally influence social behavior? The literature on network routing contains many results studying the application of monetary tolls to influence behavior and improve the efficiency of self-interested network traffic routing. These results typically fall into two categories: (1) optimal tolls which incentivize socially-optimal behavior for a known realization of the network and population, or (2) robust tolls which provably reduce congestion given uncertainty regarding networks and user types, but may fail to optimize routing in general. This paper advances the study of robust influencing, mechanisms asking how a system designer can optimally exploit additional information regarding the network structure and user price sensitivities to design pricing mechanisms which influence behavior. We design optimal scaled marginal-cost pricing mechanisms for a class of parallel-network routing games and derive the tight performance guarantees when the network structure and/or the average user price-sensitivity is known. Our results demonstrate that from the standpoint of the system operator, in general it is more important to know the structure of the network than it is to know distributional information regarding the user population."
			},
		"c2":{
            "title": "An Online Pricing Mechanism for Electric Vehicle Parking Assignment and Charge Scheduling",
            "authors": "N. Tucker, <b>B. L. Ferguson</b>, and M. Alizadeh",
            "conference": "ACC",
            "conferencelong": "The American Control Conference",
            "date": "2019",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/2019_acc_pre.pdf",
            "url": "https://ieeexplore.ieee.org/document/8814409",
            "abstract": "In this paper, we design a pricing framework for online electric vehicle (EV) parking assignment and charge scheduling. Here, users with electric vehicles want to park and charge at electric-vehicle-supply-equipment (EVSEs) at different locations and arrive/depart throughout the day. The goal is to assign and schedule users to the available EVSEs while maximizing user utility and minimizing operational costs. Our formulation can accommodate multiple locations, limited resources, operational costs, as well as variable arrival patterns. With this formulation, the parking facility management can optimize for behind-the-meter solar integration and reduce costs due to procuring electricity from the grid. We use an online pricing mechanism to approximate the EVSE reservation problem's solution and we analyze the performance compared to the offline solution. Our numerical simulation validates the performance of the EVSE reservation system in a downtown area with multiple parking locations equipped with EVSEs."
			},
		"c1":{
            "title": "Optimal planning of workplace electric vehicle charging infrastructure with smart charging opportunities",
            "authors": "<b>B. L. Ferguson</b>, V. Nagaraj, E. Can Kara, and M. Alizadeh",
            "conference": "ITSC",
            "conferencelong": "21st International Conference on Intelligent Transportation Systems (ITSC)",
            "date": "2018",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/Ferguson2018.pdf",
            "url": "https://ieeexplore.ieee.org/document/8569299",
            "abstract": "We analyze the decision problem of a workplace manager determining the optimal number of electric vehicle (EV) charging stations to install in order to supply employees with adequate charging service and take advantage of EV smart charging opportunities, while also considering the investment costs of installing additional infrastructure. To optimize smart charging revenues, we introduce assignment methods that designate specific charging spots to arriving EVs. This includes two heuristic packing methods and an offline oracle. Under each assignment method, we perform a cost-benefit analysis that determines the optimal number of chargers to install on-site. Our results highlight the importance of considering revenues from demand charge reduction to incentivize investment in additional infrastructure needed to tap into the smart charging potential of EVs, at least under current energy market prices."
			}
    },
	"Working Papers": {
		"w1":{
			"title": "Network Defense with Limited Capabilities in Dynamic Defender-Attacker Blotto Games (dDAB)",
            "authors": "A. K. Chen*, <b>B. L. Ferguson</b>*, D. Shishika, M. Dorothy, J. R. Marden, G. J. Pappas, and V. Kumar",
            "conference": "TBA",
            "conferencelong": "",
            "date": "",
            "status": "working",
            "pdfFile": "",
            "url": "./publications/blank.html",
            "abstract": ""
			}
    }
}
