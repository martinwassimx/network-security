/* Full, detailed study-guide content for all 4 chapters. */
window.CHAPTERS = [];

window.CHAPTERS.push({
  id: "ch1",
  num: 1,
  title: "Introduction to Network & Information Security",
  subtitle: "Foundations: the CIA triad, threats, vulnerabilities, risk, policy vs. mechanism, and trust.",
  readMins: 24,
  sections: [
    {type:"intro", text:"Everything else in this course rests on this chapter. Before you can defend a system you must be able to answer three questions precisely: what are you protecting (the assets and their security properties), what are you protecting them from (threats, vulnerabilities, and attackers), and what does the word secure actually mean. This guide expands every idea well beyond the slides, defines each term formally, and gives concrete examples so the concepts truly click."},

    {type:"h2", text:"1. What Is Computer Security?"},
    {type:"definition", term:"Computer Security", text:"The protection of computing systems and the information they store, process, and transmit against unauthorized access, modification, disclosure, or destruction. It spans hardware, software, networks, data, and the people who use them."},
    {type:"p", text:"Security is not a single product you buy and install. It is the combination of three layers working together: technical safeguards (encryption, firewalls, authentication), organizational measures (policies and procedures everyone must follow), and human awareness (training people not to fall for social engineering). A system is only as strong as the weakest of these layers, which is why we describe security as holistic."},
    {type:"p", text:"Security is also a continuous process, not a one-time state. New vulnerabilities are discovered, attackers change tactics, and systems evolve. A configuration that is secure today can become insecure tomorrow, so security must be monitored, reviewed, and updated continuously."},
    {type:"callout", tone:"important", title:"The core promise of security", text:"Security guarantees three things simultaneously: secret data stays secret, trustworthy data stays trustworthy, and systems stay usable when needed. Those three goals are the CIA triad, and they are the backbone of the entire field."},

    {type:"h2", text:"2. The CIA Triad \u2014 The Cornerstone of Security"},
    {type:"p", text:"Every security control you will ever meet exists to protect at least one of three properties: Confidentiality, Integrity, and Availability. Each is defined relative to a set of entities X (the people or processes the property is measured against) and some information or resource I."},

    {type:"h3", text:"Confidentiality"},
    {type:"definition", term:"Confidentiality (formal)", text:"Let X be a set of entities and let I be some information. I has the property of confidentiality with respect to X if no member of X can obtain information about I."},
    {type:"p", text:"Confidentiality prevents unauthorized disclosure. It covers both direct leakage (someone simply reading a file they should not) and information flow (data leaking indirectly through a side channel, even without transferring access rights). The set X is often implicit \u2014 for example, everyone not cleared to read a classified document."},
    {type:"p", text:"Authorization can change over time (temporal authorization). A contractor may be allowed to read proprietary data while a non-disclosure agreement is in force, and lose that access the moment the agreement expires."},
    {type:"callout", tone:"note", title:"Key insight", text:"Confidentiality says nothing about whether information is correct \u2014 only about who is allowed to access it. Correctness is the job of integrity."},
    {type:"example", title:"Confidentiality in everyday life", text:"Encrypting a laptop so a thief who steals it cannot read your files, or using file permissions so other users on a shared server cannot open your documents."},

    {type:"h3", text:"Integrity"},
    {type:"definition", term:"Integrity (formal)", text:"Let X be a set of entities and let I be information or a resource. I has the property of integrity with respect to X if all members of X trust I \u2014 including its storage, its conveyance, and its correctness."},
    {type:"list", title:"Integrity has three facets", items:[
      "Data integrity: the content itself has not been altered during storage or transmission \u2014 it matches what was originally stored or sent.",
      "Origin integrity (authentication): the source of the information is genuine and has not been forged, tampered with, or misrepresented.",
      "Assurance: resources behave correctly according to their specification, extending integrity to software, hardware, and system behavior."
    ]},
    {type:"callout", tone:"note", title:"Why integrity is harder than confidentiality", text:"Assigning a level of confidence is subjective. A new software release from a trusted vendor may still contain unknown bugs. The level of trust depends on a subjective belief about trustworthiness, not just on a classification label."},

    {type:"h3", text:"Availability"},
    {type:"definition", term:"Availability (formal)", text:"Let X be a set of entities and let I be a resource. I has the property of availability with respect to X if all members of X can access I."},
    {type:"p", text:"The meaning of access varies critically by context, and the required quality of service must be stated explicitly in the security policy. Denial-of-service attacks specifically target availability."},
    {type:"example", title:"Context changes the requirement", text:"A book-selling server that takes up to 1 hour to process a purchase may still satisfy its availability requirement (low urgency). An emergency medical server that takes 1 hour to answer an allergy query in the ER fails completely \u2014 lives are at stake and responses must take under a minute."},
    {type:"table", title:"CIA triad at a glance", headers:["Property","Protects against","Question it answers","Example control"], rows:[
      ["Confidentiality","Unauthorized disclosure","Who may read it?","Encryption, access permissions"],
      ["Integrity","Unauthorized or accidental modification","Can I trust it?","Hashes, digital signatures, checksums"],
      ["Availability","Disruption / denial of service","Can I use it when needed?","Redundancy, backups, DoS protection"]
    ]},

    {type:"h2", text:"3. Threats \u2014 The Four Broad Classes"},
    {type:"definition", term:"Threat", text:"A potential violation of security \u2014 a possible danger that might exploit a vulnerability to cause harm. The actual action that carries out the threat is called an attack, and the entity performing it is a threat agent or attacker."},
    {type:"p", text:"Bishop groups threats into four broad classes based on what the attacker is trying to do. Memorize these four; many specific attacks are just instances of them."},
    {type:"list", ordered:true, title:"The four threat classes", items:[
      "Disclosure: unauthorized access to information (attacks against confidentiality). The classic example is snooping \u2014 passive interception or eavesdropping on data.",
      "Deception: acceptance of false data (attacks against integrity). Examples: modification of data, spoofing (impersonation), repudiation of origin (falsely denying you sent something), and denial of receipt (falsely denying you received something).",
      "Disruption: interruption or prevention of correct operation (attacks against availability/integrity). Examples: modification of data in transit, man-in-the-middle, delay, and denial of service.",
      "Usurpation: unauthorized control of part of a system (attacks against integrity/availability). Examples: spoofing, modification, delay, and denial of service used to seize control."
    ]},
    {type:"table", title:"Common attacks mapped to threat classes", headers:["Attack","What it does","Threat class","CIA property hit"], rows:[
      ["Snooping / eavesdropping","Passively intercepts data","Disclosure","Confidentiality"],
      ["Modification / alteration","Changes data in storage or transit","Deception / Disruption","Integrity"],
      ["Spoofing / masquerade","Impersonates another entity","Deception / Usurpation","Integrity"],
      ["Repudiation of origin","Sender falsely denies sending","Deception","Integrity"],
      ["Denial of receipt","Receiver falsely denies receiving","Deception","Integrity / Availability"],
      ["Delay","Slows a service past usefulness","Disruption / Usurpation","Availability"],
      ["Denial of service (DoS)","Blocks legitimate access","Disruption / Usurpation","Availability"]
    ]},

    {type:"h2", text:"4. Vulnerabilities, Attacks, and Risk"},
    {type:"definition", term:"Vulnerability", text:"A weakness in a system \u2014 in its design, implementation, configuration, or operation \u2014 that can be exploited to violate the security policy."},
    {type:"definition", term:"Attack", text:"The deliberate action of exploiting a vulnerability to carry out a threat."},
    {type:"definition", term:"Risk", text:"A measure of the likelihood that a threat will exploit a vulnerability, combined with the impact (cost) if it succeeds. Risk is what security management actually tries to reduce."},
    {type:"formula", title:"The risk relationship", lines:["Risk = f( Threat, Vulnerability, Impact )"], caption:"If any factor is zero (no threat, no vulnerability, or no impact) the risk effectively disappears. Security controls work by reducing one or more of these factors."},
    {type:"p", text:"Because removing all risk is impossible and expensive, organizations practice risk management: identify assets, estimate threats and vulnerabilities, and apply controls where the reduction in risk justifies the cost."},

    {type:"h2", text:"5. Policy vs. Mechanism \u2014 A Critical Distinction"},
    {type:"definition", term:"Security Policy", text:"A statement of what is and is not allowed \u2014 the rules that define authorized (secure) versus unauthorized (nonsecure) behavior and states."},
    {type:"definition", term:"Security Mechanism", text:"A method, tool, or procedure that enforces some part of the security policy \u2014 how the rules are actually implemented."},
    {type:"comparison", title:"Policy vs. Mechanism", left:{title:"Policy (the what)", points:[
      "Defines authorized vs. unauthorized states",
      "May be formal or informal",
      "Context-dependent: differs by site and organization",
      "Can be implicit or explicit",
      "Example: No student may copy another student's homework"
    ]}, right:{title:"Mechanism (the how)", points:[
      "Enforces the policy in practice",
      "File permissions (chmod, ACLs)",
      "Firewalls and packet filters",
      "Physical locks and cryptographic protocols",
      "Example: File permissions that block reading another user's homework file"
    ]}},
    {type:"callout", tone:"tip", title:"Remember", text:"Policy says what should happen; mechanism makes it happen. A perfect policy with weak mechanisms is insecure, and strong mechanisms enforcing a vague policy create confusion."},

    {type:"h2", text:"6. The Goals of Security: Prevention, Detection, Recovery"},
    {type:"list", ordered:true, title:"Three complementary goals", items:[
      "Prevention: stop violations before they happen (e.g., access controls, encryption, firewalls). Prevention is ideal but never perfect.",
      "Detection: recognize that a violation is occurring or has occurred (e.g., intrusion detection systems, audit logs, monitoring). Detection assumes prevention can fail.",
      "Recovery: stop an ongoing attack, repair the damage, and resume correct operation (e.g., backups, incident response, forensic analysis). Recovery may also mean continuing to function while under attack."
    ]},
    {type:"p", text:"A strong security program uses all three: prevent what you can, detect what slips through, and recover quickly from whatever succeeds."},

    {type:"h2", text:"7. Assumptions and Trust"},
    {type:"p", text:"Every policy, mechanism, and procedure rests on assumptions. If those assumptions are wrong, security breaks down even if everything else is implemented perfectly. Understanding your assumptions is the same as understanding your security."},
    {type:"example", title:"The hidden assumptions in a security patch", text:"An administrator installs a vendor patch. Has security improved? Only if every hidden assumption holds: (1) the patch really came from the vendor and was not tampered with in transit; (2) the vendor tested it thoroughly \u2014 a rushed patch can open a new, easier hole; (3) the vendor's test environment matches the local one; and (4) the multi-step installation was performed perfectly. Break any one assumption and the patch becomes a problem instead of a fix."},
    {type:"callout", tone:"warning", title:"Trust is always present", text:"Trust is usually implicit and unstated, but it never disappears. Even mathematical proof does not remove trust \u2014 it merely pushes it down to the theorem prover, the compiler, and the hardware."},

    {type:"h2", text:"8. Assurance, Operational Issues, and Human Factors"},
    {type:"definition", term:"Assurance", text:"The confidence, backed by evidence, that a system meets its security requirements. It comes from careful specification, design, implementation, and testing."},
    {type:"list", title:"Operational and managerial issues", items:[
      "Cost-benefit analysis: is the protection worth more than the asset it protects?",
      "Risk analysis: which assets matter most and which threats are realistic?",
      "Laws and customs: controls must be legal and acceptable to the people who use them, or they will be bypassed."
    ]},
    {type:"list", title:"Human factors \u2014 often the weakest link", items:[
      "Organizational problems: unclear responsibility, lack of resources, and no one accountable for security.",
      "People problems: insiders (careless or malicious) and social engineering, where attackers trick people into breaking the rules."
    ]},
    {type:"callout", tone:"important", title:"The weakest link", text:"Technical defenses are often defeated not by breaking the cryptography, but by deceiving a human. Security awareness is therefore a core control, not an optional extra."},

    {type:"summary", title:"Chapter 1 \u2014 Key Takeaways", items:[
      "Computer security protects systems and data through technical, organizational, and human layers \u2014 and it is a continuous process, not a product.",
      "The CIA triad (Confidentiality, Integrity, Availability) is the foundation; each property is defined relative to a set of entities X and information I.",
      "Threats fall into four classes: disclosure, deception, disruption, and usurpation. Specific attacks (snooping, spoofing, modification, DoS, repudiation) map onto these.",
      "Risk combines threat, vulnerability, and impact; risk management reduces it cost-effectively.",
      "Policy defines what is allowed; mechanism enforces it. Keep the two distinct.",
      "Security pursues prevention, detection, and recovery together.",
      "Every defense rests on assumptions and trust \u2014 and humans are frequently the weakest link."
    ]}
  ]
});

window.CHAPTERS.push({
  id: "ch2",
  num: 2,
  title: "Access Control",
  subtitle: "How systems decide who may do what: the access matrix, DAC, MAC, ORCON, ACLs, capabilities, and RBAC.",
  readMins: 22,
  sections: [
    {type:"intro", text:"Access control is the practical heart of security: it is the set of rules and mechanisms that decide which subjects (users, processes) may perform which operations (read, write, execute) on which objects (files, devices, records). This chapter starts from the abstract protection state and the access-control matrix, then walks through every model you need to know \u2014 discretionary, mandatory, and originator-controlled \u2014 and the two ways the matrix is implemented in real systems."},

    {type:"h2", text:"1. The Protection State and the Access-Control Matrix"},
    {type:"definition", term:"Protection State", text:"The complete description, at a given moment, of all the rights every subject has over every object in a system. Security is about keeping the system in protection states that the policy considers authorized."},
    {type:"definition", term:"Access-Control Matrix", text:"A model of the protection state as a table with one row per subject and one column per object (and per subject, since subjects can be objects too). Each cell lists the rights that subject holds over that object."},
    {type:"table", title:"Example access-control matrix", headers:["Subject","file1","file2","process A"], rows:[
      ["Alice","read, write, own","read","\u2014"],
      ["Bob","read","read, write, own","\u2014"],
      ["process A","read","\u2014","own"]
    ]},
    {type:"list", title:"Typical access rights", items:[
      "read (r): view the contents of an object",
      "write (w): modify the contents of an object",
      "execute (x): run an object as a program",
      "append (a): add to an object without reading existing contents",
      "own (o): control the rights of others over the object (grant or revoke)"
    ]},
    {type:"p", text:"The matrix is usually huge and sparse (most cells are empty), so real systems never store it as a literal table. Instead they store it by columns (access control lists) or by rows (capabilities) \u2014 covered later in this chapter."},

    {type:"h2", text:"2. Subjects, Objects, and Rights"},
    {type:"definition", term:"Subject", text:"An active entity that initiates actions \u2014 a user, a process acting on a user's behalf, or even a device."},
    {type:"definition", term:"Object", text:"A passive entity that is acted upon \u2014 a file, a record, a memory segment, a printer. A subject can also be an object (e.g., one process controlling another)."},
    {type:"definition", term:"Right (permission)", text:"An authorization for a subject to perform a specific operation on an object, recorded as an entry in the access-control matrix."},

    {type:"h2", text:"3. Discretionary Access Control (DAC / IBAC)"},
    {type:"definition", term:"Discretionary Access Control (DAC)", text:"If an individual user can set an access-control mechanism to allow or deny access to an object, that mechanism is a Discretionary Access Control, also called Identity-Based Access Control (IBAC)."},
    {type:"list", title:"Defining characteristics", items:[
      "Identity is key: access depends on who is requesting (subject identity) and who owns the object.",
      "Owner controls: the resource owner grants or revokes access at their own discretion; no one else can override that decision.",
      "Most common model: UNIX file permissions and Windows NTFS ACLs are DAC."
    ]},
    {type:"example", title:"DAC in everyday life", text:"A child keeps a diary and grants read access only to her mother. No one else may read it. It is entirely her decision \u2014 her discretion. That is exactly how DAC works."},
    {type:"example", title:"DAC on UNIX", text:"Running chmod 640 report.txt lets the owner read and write, the group read, and everyone else nothing. The owner alone chooses these permissions."},
    {type:"callout", tone:"warning", title:"The weakness of DAC", text:"Because users control their own objects, a careless or tricked user (or malware running as that user) can hand out access freely. DAC cannot enforce an organization-wide rule that overrides the owner."},

    {type:"h2", text:"4. Mandatory Access Control (MAC)"},
    {type:"definition", term:"Mandatory Access Control (MAC)", text:"When a system mechanism controls access to an object and an individual user cannot alter that access, the control is a Mandatory Access Control, sometimes called rule-based access control."},
    {type:"p", text:"Access decisions are made by the system according to fixed rules and object attributes (such as classification labels: Unclassified, Confidential, Secret, Top Secret), not by the owner. Even the owner of a document cannot override the rule."},
    {type:"example", title:"MAC in the real world", text:"The law allows a court to access driving records without the record owner's permission. The owner has no control \u2014 access is mandatory. Military classification systems work the same way: a Secret document is governed by system rules, not by whoever created it."},

    {type:"h2", text:"5. DAC vs. MAC"},
    {type:"table", title:"Discretionary vs. Mandatory access control", headers:["Aspect","DAC (Discretionary)","MAC (Mandatory)"], rows:[
      ["Who controls access?","Resource owner (user)","System / OS mechanism"],
      ["Can owner override?","Yes \u2014 owner's discretion","No \u2014 rules are fixed"],
      ["Based on?","Identity of subject/owner","Rules and object attributes (labels)"],
      ["Can the user change it?","Yes, within their own objects","Never \u2014 system enforced"],
      ["Common example","UNIX chmod, Windows ACLs","Military classification labels"]
    ]},

    {type:"h2", text:"6. Originator-Controlled Access (ORCON / ORGCON)"},
    {type:"definition", term:"Originator-Controlled Access (ORCON)", text:"An access control in which access decisions are based on the creator (originator) of an object or the information it contains. The originator controls dissemination even after handing the file to someone else."},
    {type:"steps", title:"How ORCON differs from ownership", items:[
      "Bit Twiddlers Inc. (the originator/creator) shares a specification with Microhackers Ltd.",
      "Microhackers Ltd. now holds (owns) the file on its own systems.",
      "But Microhackers cannot share the file further without Bit Twiddlers' explicit permission \u2014 the originator still controls access."
    ]},
    {type:"list", title:"Key points about ORCON", items:[
      "Creator is not the owner: the holder possesses the file but cannot decide who else may access it.",
      "Contrasted with DAC: in DAC the owner controls access; in ORCON the originator controls access regardless of who holds the file.",
      "Real-world uses: government classified information shared with contractors, licensed intellectual property, trade secrets under NDA.",
      "Implementation challenge: the file must carry its enforcement rules wherever it travels \u2014 Digital Rights Management (DRM) systems attempt exactly this and it is technically difficult."
    ]},

    {type:"h2", text:"7. Implementing the Matrix: ACLs vs. Capabilities"},
    {type:"p", text:"Since the full access-control matrix is impractical to store, systems slice it two ways."},
    {type:"definition", term:"Access Control List (ACL)", text:"A column of the matrix stored with the object: for each object, the list of subjects and the rights each one has. Answers the question 'who can access this object?'."},
    {type:"definition", term:"Capability (C-list)", text:"A row of the matrix stored with the subject: for each subject, the list of objects it may access and with what rights. A capability is like an unforgeable ticket. Answers the question 'what can this subject access?'."},
    {type:"comparison", title:"ACLs vs. Capabilities", left:{title:"Access Control Lists", points:[
      "Attached to the object",
      "Easy to see who can access a given object",
      "Easy to revoke all access to one object",
      "Used by UNIX, Windows, most operating systems",
      "Harder to audit one subject's total access"
    ]}, right:{title:"Capabilities", points:[
      "Attached to the subject (a ticket it carries)",
      "Easy to see everything one subject can access",
      "Easy to delegate by passing the ticket",
      "Revocation is harder (tickets are spread out)",
      "Must be unforgeable (protected by the system)"
    ]}},

    {type:"h2", text:"8. Role-Based Access Control (RBAC)"},
    {type:"definition", term:"Role-Based Access Control (RBAC)", text:"Access rights are assigned to roles (such as Manager, Clerk, Auditor) rather than directly to individuals. Users acquire rights by being assigned to roles. Changing a person's access is as simple as changing their role."},
    {type:"p", text:"RBAC scales well in organizations: when an employee changes jobs you reassign their role instead of editing dozens of individual permissions. It also makes least privilege and separation of duties easy to express."},

    {type:"h2", text:"9. Least Privilege and Separation of Duties"},
    {type:"callout", tone:"important", title:"Principle of Least Privilege", text:"Every subject should be granted only the minimum rights necessary to perform its task, and no more. This limits the damage if the subject is compromised or makes a mistake."},
    {type:"callout", tone:"tip", title:"Separation of Duties", text:"No single person should be able to complete a sensitive transaction alone. Splitting a task among multiple people (e.g., one requests a payment, another approves it) prevents fraud and unauthorized modification."},

    {type:"h2", text:"10. Complete Comparison of the Three Models"},
    {type:"table", title:"DAC vs. MAC vs. ORCON", headers:["Property","DAC","MAC","ORCON"], rows:[
      ["Who controls?","Resource owner","System mechanism","Original creator"],
      ["User override?","Yes (their objects)","Never","Only the originator"],
      ["Key factor","Subject/object identity","Labels and rules","Creator identity"],
      ["OS enforces?","Partially","Fully","Requires special support"],
      ["Typical use","General computing","Military / high-security","IP and classified info sharing"]
    ]},
    {type:"callout", tone:"note", title:"Models can be combined", text:"Real systems often layer the models \u2014 for example DAC for everyday files with a MAC layer for classified data, or an ORCON overlay on top of DAC/MAC for shared intellectual property."},

    {type:"summary", title:"Chapter 2 \u2014 Key Takeaways", items:[
      "The protection state is captured by the access-control matrix: subjects (rows) x objects (columns), with rights in each cell.",
      "DAC lets the owner decide access (identity-based); it is the most common model but vulnerable to careless owners.",
      "MAC lets the system enforce fixed rules and labels; users cannot override it (military classification).",
      "ORCON lets the original creator control dissemination even after the file is handed over (DRM-style).",
      "The matrix is implemented as ACLs (by object) or capabilities (by subject), each with different revocation and audit trade-offs.",
      "RBAC assigns rights to roles for scalability; least privilege and separation of duties limit damage and fraud."
    ]}
  ]
});

window.CHAPTERS.push({
  id: "ch3",
  num: 3,
  title: "Security Policies",
  subtitle: "Defining security for systems and organizations: policy types, models, trust, and real case studies.",
  readMins: 26,
  sections: [
    {type:"intro", text:"A security policy is the document that defines, for one specific organization, exactly what secure means. This chapter formalizes that idea, shows how policies are classified (military vs. commercial, confidentiality vs. integrity), explains the role of abstract security models, examines the trust that every policy quietly depends on, and finishes with two real University of California case studies plus practical advice for writing policies. It maps directly to Chapter 4 of Bishop."},

    {type:"h2", text:"1. Fundamentals: What Is a Security Policy?"},
    {type:"definition", term:"Security Policy (Def. 4-1)", text:"A statement that partitions the states of a system into a set of authorized (secure) states and a set of unauthorized (nonsecure) states."},
    {type:"p", text:"Think of the system as a finite-state machine. Some states are authorized (for example s1 and s2) and some are unauthorized (for example s3 and s4). The policy is simply the line drawn between the two groups."},
    {type:"definition", term:"Secure System (Def. 4-2)", text:"A system that starts in an authorized state and cannot enter an unauthorized state."},
    {type:"definition", term:"Breach of Security (Def. 4-3)", text:"Occurs when a system enters an unauthorized state \u2014 regardless of which mechanism failed or how."},
    {type:"definition", term:"Security Mechanism (Def. 4-7)", text:"An entity or procedure that enforces some part of the security policy."},

    {type:"h2", text:"2. Policy vs. Mechanism"},
    {type:"comparison", title:"The most critical distinction in security", left:{title:"Policy", points:[
      "A statement of what is and is not allowed",
      "Defines authorized vs. unauthorized states",
      "May be formal or informal",
      "Context-dependent: policies differ by site",
      "Can be implicit (early UNIX) or explicit"
    ]}, right:{title:"Mechanism", points:[
      "The control that enforces the policy",
      "File access permissions (chmod, ACLs)",
      "Network firewalls and packet filters",
      "Physical locks and procedural controls",
      "Cryptographic protocols and authentication"
    ]}},
    {type:"example", title:"Policy vs. mechanism", text:"Policy: No student may copy another student's homework assignment. Mechanism: file permissions that prevent one student from reading another student's homework file."},

    {type:"h2", text:"3. The CIA Triad in a Policy Context"},
    {type:"p", text:"Every security policy must address all three core properties \u2014 in the specific context of the organization."},
    {type:"definition", term:"Confidentiality", text:"No member of set X can obtain information about I. Prevents unauthorized disclosure, covering both direct leakage and indirect information flow."},
    {type:"definition", term:"Integrity", text:"All members of X trust I \u2014 including its storage and conveyance. Encompasses data integrity, origin integrity (authentication), and assurance that resources function correctly."},
    {type:"definition", term:"Availability", text:"All members of X can access resource I. The meaning of access varies by context: an ER system needs sub-minute responses; a bookstore may tolerate an hour."},

    {type:"h2", text:"4. Confidentiality In Depth"},
    {type:"definition", term:"Confidentiality (formal)", text:"Let X be a set of entities and I some information. I has the property of confidentiality with respect to X if no member of X can obtain information about I."},
    {type:"list", title:"Four things a confidentiality policy must handle", items:[
      "Information disclosure: prevent leakage to unauthorized entities. The set X is often implicit (everyone not authorized).",
      "Information flow: even without transferring rights, information can flow illicitly through side channels \u2014 the policy must cover indirect channels too.",
      "Temporal authorization: access changes over time (a contractor under an NDA loses access when it expires).",
      "Scope: a confidentiality policy deals only with confidentiality; integrity needs a separate policy component."
    ]},
    {type:"callout", tone:"note", title:"Key insight", text:"Confidentiality says nothing about whether information is correct \u2014 only about who may access it."},

    {type:"h2", text:"5. Integrity In Depth"},
    {type:"definition", term:"Integrity (formal)", text:"Let X be a set of entities and I information or a resource. I has integrity with respect to X if all members of X trust I."},
    {type:"list", ordered:true, title:"Three components of integrity", items:[
      "Data integrity: the content has not been altered during storage or conveyance.",
      "Origin integrity (authentication): the source is genuine and has not been forged or misrepresented.",
      "Assurance: resources function correctly according to their specification (extends to software and hardware)."
    ]},
    {type:"callout", tone:"note", title:"Why integrity is harder", text:"Assigning a level of confidence is subjective. A new release from a trusted vendor may still have unknown bugs \u2014 trust depends on subjective belief, not just labels."},

    {type:"h2", text:"6. Availability In Depth"},
    {type:"definition", term:"Availability (formal)", text:"Let X be a set of entities and I a resource. I has availability with respect to X if all members of X can access I."},
    {type:"example", title:"Access depends on context", text:"A book-selling server taking up to 1 hour to process a purchase may still meet its availability requirement (low urgency, flexible latency). A medical server taking 1 hour to answer an allergy query in the ER does NOT \u2014 lives are at stake and seconds matter."},
    {type:"callout", tone:"important", title:"State it explicitly", text:"Quality-of-service requirements and availability parameters must be written explicitly into the security policy."},

    {type:"h2", text:"7. Types of Security Policies"},
    {type:"h3", text:"Military (Governmental) Security Policy \u2014 focus: Confidentiality"},
    {type:"definition", term:"Military Security Policy (Def. 4-9)", text:"A security policy developed primarily to provide confidentiality."},
    {type:"list", title:"Why confidentiality comes first", items:[
      "Military operations depend on secrecy: leaking troop movements, ship sailing dates, or battle plans lets an adversary plan countermeasures.",
      "Why not integrity first? Militaries have redundant communication channels, so altered data can often be caught \u2014 but leaked data can never be unleaked.",
      "Privacy laws: civilian equivalents include the US Privacy Act (and similar Swedish legislation) constraining what governments may collect and how they use it.",
      "Consequences of breach: fines, jail time, and loss of public trust \u2014 people stop sharing information with a compromised agency."
    ]},
    {type:"h3", text:"Commercial Security Policy \u2014 focus: Integrity"},
    {type:"definition", term:"Commercial Security Policy (Def. 4-10)", text:"A security policy developed primarily to provide integrity."},
    {type:"comparison", title:"Banking: why integrity matters most", left:{title:"Confidentiality breach", points:[
      "An account balance is revealed",
      "Embarrassing, possible loss of a customer",
      "Minor financial impact"
    ]}, right:{title:"Integrity breach", points:[
      "Account balances are altered",
      "Funds disappear or appear from nowhere",
      "Financially ruinous"
    ]}},
    {type:"list", title:"Commercial integrity tools", items:[
      "Transaction-oriented integrity policies: every action must leave the database in a consistent state \u2014 a transfer is either fully completed or fully rolled back, never halfway.",
      "Separation of duties: external constraints can forbid one entity from completing a transaction alone, requiring multiple parties to prevent fraud."
    ]},
    {type:"table", title:"All four policy types at a glance", headers:["Policy type","Primary focus","Trust","Scope"], rows:[
      ["Military","Confidentiality","No trust in objects","Also covers integrity and availability where possible"],
      ["Commercial","Integrity","Trust level is subjective","May include transaction-oriented policies"],
      ["Confidentiality policy","Confidentiality only","No trust in objects","Does NOT address integrity at all"],
      ["Integrity policy","Integrity only","Trust level assigned by policy","Does NOT address confidentiality at all"]
    ]},

    {type:"h2", text:"8. Security Models"},
    {type:"definition", term:"Security Model (Def. 4-8)", text:"A model that represents a particular policy or set of policies. It abstracts the details relevant for analysis, focusing on characteristics shared by many policies."},
    {type:"formula", title:"From policy to proof", lines:["Security Policy  \u2192  Security Model  \u2192  Formal Analysis","(site-specific rules) (abstract policy class) (mathematical proofs)"], caption:"A model lets you analyze an entire class of policies at once instead of every policy individually."},
    {type:"list", title:"Why models matter", items:[
      "Efficiency: many policies share the same structural properties, so one model analyzes a whole class at once.",
      "Model vs. policy: a model abstracts away site-specific details \u2014 the same model can fit both a military policy and a corporate confidentiality policy.",
      "The HRU result: no single nontrivial analysis can cover all policies (Theorem 3-2). Restricting the class of policies enough makes meaningful analysis possible.",
      "Formal vs. informal: formal mathematical models enable rigorous proofs but are hard to read; informal policies are readable but ambiguous \u2014 precision requires formalism."
    ]},

    {type:"h2", text:"9. The Role of Trust"},
    {type:"list", ordered:true, title:"Five truths about trust", items:[
      "Any theory or mechanism rests on certain assumptions.",
      "If the assumptions are incorrect, security breaks down.",
      "Understanding the assumptions equals understanding the security.",
      "Even formal verification only pushes trust to a lower level \u2014 it never removes it.",
      "Trust is implicit and often unstated, but it is always present."
    ]},
    {type:"example", title:"Trust in a security patch", text:"Installing a patch improves security only if four assumptions hold: (1) it really came from the vendor and was not tampered with; (2) the vendor tested it against all relevant attacks \u2014 a patch rushed out in 24 hours has been known to open a second, easier hole; (3) the vendor's test environment matches yours (a patch that resets ownership to root can break a system expecting ownership by bin); and (4) the multi-step installation was performed perfectly. Break any one and the patch becomes a problem."},
    {type:"list", title:"Trust remains even in formal verification", items:[
      "Theorem provers must themselves be correct \u2014 a bug in the prover invalidates the proof.",
      "Preconditions fed to the prover must actually hold in the deployment environment (including the OS version).",
      "The compiler and linker must produce executable code that behaves identically to the source \u2014 a rigged compiler can insert malicious code (the Thompson compiler attack).",
      "The hardware must be correct \u2014 a verified program using floating point gave wrong results on the Pentium FDIV bug."
    ]},
    {type:"callout", tone:"warning", title:"Formal methods relocate trust", text:"Formal verification pushes trust lower \u2014 to theorem provers, compilers, and hardware \u2014 but never eliminates it entirely."},

    {type:"h2", text:"10. Types of Access Control"},
    {type:"definition", term:"Discretionary Access Control (DAC / IBAC) (Def. 4-13)", text:"If a user can set an access-control mechanism to allow or deny access to an object, that mechanism is a DAC (also called Identity-Based Access Control). The owner decides; UNIX and Windows file permissions are examples."},
    {type:"definition", term:"Mandatory Access Control (MAC) (Def. 4-14)", text:"When a system mechanism controls access and a user cannot alter it, the control is a MAC (rule-based). Example: a court accessing driving records without the owner's permission; military classification labels."},
    {type:"definition", term:"Originator-Controlled Access (ORCON / ORGCON)", text:"Access is based on the creator of the object or its information. The originator controls dissemination even after giving the file away \u2014 the holder cannot reshare without the originator's permission. DRM systems attempt to enforce this."},
    {type:"table", title:"Access control models compared", headers:["Property","DAC","MAC","ORCON"], rows:[
      ["Who controls?","Resource owner","System mechanism","Original creator"],
      ["User override?","Yes (their objects)","Never","Only the originator"],
      ["Key factor","Subject/object identity","Labels and rules","Creator identity"],
      ["OS enforces?","Partially","Fully","Requires special support"],
      ["Typical use","General computing","Military / high-security","IP and classified info"]
    ]},

    {type:"h2", text:"11. Case Study: UC Davis Acceptable Use Policy (AUP)"},
    {type:"list", title:"An informal, community-focused policy", items:[
      "Goals: provide access to campus resources and enable worldwide communication for research and education.",
      "User responsibilities: respect other users' rights, respect system and physical-resource integrity, and obey all relevant laws and contracts.",
      "Enforcement: minor violations resolved locally (warnings); serious ones lead to denial of access; very serious cases go to formal discipline via the Office of Student Judicial Affairs.",
      "Prohibited actions: illicitly monitoring others, spamming, and locating or exploiting security vulnerabilities \u2014 listed as examples, not an exhaustive list.",
      "Policy type: a typical AUP \u2014 written informally for the user community, assuming the reader understands the legal and organizational context."
    ]},

    {type:"h2", text:"12. Case Study: UC Electronic Mail Policy (Three-Tier Structure)"},
    {type:"comparison", title:"A more formal, system-wide policy", left:{title:"1. Policy Summary", points:[
      "Email is not private \u2014 may be read accidentally or during maintenance",
      "Think before sending; be courteous and respectful",
      "Supervisors may read employees' work-related email",
      "Personal email allowed but must not interfere with work"
    ]}, right:{title:"2. Full Policy (all campuses)", points:[
      "Email infrastructure is university property",
      "Academic freedom and free-speech principles apply",
      "Access without consent only under extreme circumstances",
      "Such access must be approved by a Vice Chancellor or University Vice President",
      "Anonymity permitted if it does not violate laws or policies"
    ]}},
    {type:"list", title:"3. Campus Implementation (Davis)", items:[
      "Personal use not allowed if it benefits non-university organizations.",
      "Specific procedures for email inspection and monitoring.",
      "Appeal procedures established for disputed access.",
      "The campus does not archive all email; backed-up email need not be provided to employees."
    ]},
    {type:"callout", tone:"important", title:"Hierarchy rule", text:"When there is a conflict, the higher (system-wide) policy always prevails over the campus implementation."},

    {type:"h2", text:"13. Policy Ambiguity: The Hidden Danger"},
    {type:"list", title:"Where ambiguity comes from", items:[
      "Implicit policies: early UNIX assumed a friendly research group ('don't delete others' files; unprotected files may be read'). That implied policy became inadequate in academic and commercial settings, but the mechanisms were never updated.",
      "Mechanism-defined policies: when a policy is described by mechanisms instead of intent, and some mechanisms allow what others forbid, the effective policy is contradictory.",
      "Natural-language ambiguity: the UC email policy's definition of E-mail includes 'transactional information associated with such records', which may or may not include network packets.",
      "The fix: formal policy languages (such as DTEL, a constraint language) remove ambiguity with mathematical precision \u2014 but they require specialized knowledge to read and write."
    ]},

    {type:"h2", text:"14. Building a Security Policy in Practice"},
    {type:"steps", title:"How real organizations develop a policy", items:[
      "Threat analysis: start from Chapter 1's framework \u2014 identify assets, adversaries, and plausible attacks.",
      "Generic policy statement: begin with broad constraints covering everyone \u2014 goals, responsibilities, and prohibited actions at a high level.",
      "Incident-driven refinement: as incidents and questions arise, refine the policy for specific cases. Real policies evolve and are never complete on day one.",
      "Auxiliary policies: add subordinate policies (like the UC email policy) that add specifics but must never contradict the higher policy.",
      "Campus/local implementation: each unit implements the policy in its own context, accounting for local variation and customs.",
      "Enforcement mechanisms: define procedural, technical, and organizational controls, and assign responsibility for monitoring, response, and updates."
    ]},

    {type:"summary", title:"Chapter 3 \u2014 Key Takeaways", items:[
      "A security policy partitions system states into authorized and unauthorized; what is secure under one policy may be insecure under another.",
      "CIA is non-negotiable: every policy must address confidentiality, integrity, and availability in context, and the meaning of access and trust varies by situation.",
      "Military policies prioritize confidentiality; commercial policies prioritize integrity \u2014 each reflects different failure consequences.",
      "Security models abstract policies so a whole class can be analyzed at once; the HRU result shows no single analysis fits all policies.",
      "Trust underlies everything \u2014 even formal verification only relocates trust to provers, compilers, and hardware.",
      "DAC (owner), MAC (system), and ORCON (creator) can be used alone or layered together.",
      "Natural-language policies are inherently ambiguous; formal languages add rigor at the cost of expertise."
    ]}
  ]
});

window.CHAPTERS.push({
  id: "ch4",
  num: 4,
  title: "Basic Cryptography",
  subtitle: "Classical and modern ciphers, cryptanalysis, DES, AES, public-key cryptography, RSA, and checksums.",
  readMins: 30,
  sections: [
    {type:"intro", text:"Cryptography is the science of concealing meaning so that only authorized parties can read it. This chapter starts with the formal structure of a cryptosystem, breaks classical ciphers using statistics, builds up to the Data Encryption Standard and its successor AES, then crosses into the revolution of public-key cryptography and RSA, finishing with cryptographic checksums and HMAC. It maps to Chapter 8 of Bishop."},

    {type:"h2", text:"1. What Is Cryptography?"},
    {type:"definition", term:"Cryptosystem (Def. 8-1)", text:"A cryptosystem is a 5-tuple (E, D, M, K, C), where M is the set of plaintexts, K the set of keys, C the set of ciphertexts, E: M x K -> C the set of enciphering functions, and D: C x K -> M the set of deciphering functions."},
    {type:"list", title:"Core vocabulary", items:[
      "Cryptography: the art and science of concealing meaning (Greek for 'secret writing').",
      "Cryptanalysis: the breaking of codes and ciphers.",
      "A cryptosystem formalizes exactly how messages are encrypted and decrypted.",
      "Kerckhoffs's principle: assume the algorithm is publicly known; only the key is secret. Security must rest on the key, not on hiding the algorithm."
    ]},

    {type:"h2", text:"2. The Caesar Cipher"},
    {type:"p", text:"The Caesar cipher shifts each letter by a fixed key value. For key = 3: A->D, B->E, ..., Z->C. It is the simplest substitution cipher."},
    {type:"formula", title:"Caesar cipher formulas", lines:["Encipherment:  Ek(m) = (m + k) mod 26","Decipherment:  Dk(c) = (26 + c \u2212 k) mod 26"], caption:"Letters are numbered A=0 ... Z=25."},
    {type:"example", title:"Encrypting HELLO with key = 3", text:"H E L L O = 7 4 11 11 14. Add 3 (mod 26): 10 7 14 14 17 = K H O O R. So HELLO becomes KHOOR."},
    {type:"callout", tone:"warning", title:"Trivially broken", text:"There are only 26 possible keys, so an attacker simply tries all of them (brute force) and reads which output looks like English."},

    {type:"h2", text:"3. Types of Cryptographic Attacks"},
    {type:"list", ordered:true, title:"Three standard attack models", items:[
      "Ciphertext-only attack: the adversary has ONLY the ciphertext; goal is to recover the plaintext (or the key).",
      "Known-plaintext attack: the adversary has ciphertext AND its matching plaintext; goal is to find the key.",
      "Chosen-plaintext attack: the adversary can request encipherment of plaintexts they choose; goal is to find the key."
    ]},
    {type:"callout", tone:"note", title:"What makes a cipher good", text:"A good cryptosystem must resist all three attack types. Attacks use both mathematics and statistics \u2014 statistical methods rely on a model of the language, such as English single-letter (1-gram) frequencies."},

    {type:"h2", text:"4. English Character Frequency Model (1-gram)"},
    {type:"table", title:"Approximate English letter frequencies", headers:["Letter","Freq","Letter","Freq"], rows:[
      ["E","0.130 (most frequent)","O","0.080"],
      ["T","0.090","N","0.070"],
      ["A","0.080","I","0.065"],
      ["R","0.065","S","0.060"],
      ["H","0.060","L","0.035"],
      ["U","0.030","J","0.005"],
      ["Z","0.002 (least frequent)","\u2014","used to crack ciphers"]
    ]},
    {type:"p", text:"Because E is by far the most common letter, the most frequent symbol in a long monoalphabetic ciphertext is very likely E \u2014 this is the lever that breaks simple substitution."},

    {type:"h2", text:"5. Classical Cryptosystems Overview"},
    {type:"list", title:"Properties of classical (symmetric) ciphers", items:[
      "Also called single-key or symmetric cryptosystems.",
      "The same key is used for both encipherment and decipherment.",
      "Formally, for every Ek in E and key k in K, there exists Dk in D such that Dk = Ek inverse.",
      "Two fundamental types: transposition (rearranges characters) and substitution (replaces characters).",
      "They can be combined to form product ciphers (DES is an example)."
    ]},

    {type:"h2", text:"6. Transposition Ciphers"},
    {type:"definition", term:"Transposition Cipher", text:"A cipher that rearranges the characters of the plaintext. The letters are not changed \u2014 only their positions are permuted."},
    {type:"example", title:"Rail Fence cipher", text:"Write HELLO, WORLD in 2 rows then read across. Row 1: H L O O L. Row 2: E L W R D. Ciphertext: HLOOLELWRD."},
    {type:"callout", tone:"tip", title:"How to detect and break it", text:"Single-letter (1-gram) frequencies still match English because the letters are unchanged, but bigram (2-gram) frequencies do NOT match. The attack is anagramming \u2014 rearranging letters guided by n-gram frequency tables."},

    {type:"h2", text:"7. Substitution Ciphers Overview"},
    {type:"list", title:"Substitution replaces characters", items:[
      "Unlike transposition, the characters are changed, not just rearranged.",
      "Simple substitution: the Caesar cipher.",
      "Polyalphabetic substitution: the Vigenere cipher.",
      "Perfect-secrecy variant: the one-time pad.",
      "The Caesar cipher is broken with a statistical ciphertext-only attack: compute the correlation phi(i) between the ciphertext and the English frequency model for each shift i."
    ]},

    {type:"h2", text:"8. The Vigenere Cipher (Polyalphabetic)"},
    {type:"list", title:"How it works", items:[
      "Uses a sequence of keys (a keyword) instead of a single key.",
      "Key letters are applied to successive plaintext characters, and the keyword repeats.",
      "The period is the length of the keyword.",
      "Because several alphabets are used in rotation, it is called a polyalphabetic cipher."
    ]},
    {type:"example", title:"Vigenere with key = BENCH", text:"Key:    B E N C H B E N C H ...  Plaintext: A L I M E R I C K P ...  Ciphertext: B P V O L S M P M W ... The keyword BENCH repeats across the message."},
    {type:"callout", tone:"note", title:"Historically 'unbreakable'", text:"The Vigenere cipher was considered unbreakable for centuries \u2014 until Kasiski's method exposed the key length."},

    {type:"h2", text:"9. Breaking Vigenere: Kasiski's Method"},
    {type:"p", text:"Observation: when the same key letters line up over the same plaintext letters, identical repeated strings appear in the ciphertext. The distance between two repetitions is a multiple of the period (key length)."},
    {type:"steps", title:"Kasiski's method, step by step", items:[
      "Find repeated strings (length >= 2) in the ciphertext.",
      "Record the gaps (distances) between each pair of repetitions.",
      "Compute the GCD of the gap lengths to estimate the probable key length.",
      "Split the ciphertext into columns, one per key position (= probable key length).",
      "Use the Index of Coincidence to verify the period.",
      "Solve each column independently as a simple Caesar cipher."
    ]},
    {type:"definition", term:"Index of Coincidence (IC)", text:"The probability that two letters chosen at random from the ciphertext are the same. Its value reveals how many alphabets (the period) were used."},

    {type:"h2", text:"10. Index of Coincidence vs. Key Period"},
    {type:"table", title:"Expected IC by period", headers:["Period","Expected IC","Interpretation"], rows:[
      ["1","0.066","Caesar (one alphabet)"],
      ["2","0.052","2-key Vigenere"],
      ["3","0.047","3-key"],
      ["4","0.045","4-key"],
      ["5","0.044","5-key"],
      ["10","0.041","10-key"],
      ["Large","0.038","Approaches random"]
    ]},

    {type:"h2", text:"11. The One-Time Pad \u2014 Perfect Secrecy"},
    {type:"list", title:"Why it cannot be broken", items:[
      "It is a Vigenere variant where the key is random and at least as long as the message.",
      "The key is used only once and never repeated.",
      "Shannon proved (1949) it is information-theoretically secure \u2014 provably impossible to break.",
      "Every possible plaintext is equally likely given any ciphertext, so there is no statistical correlation to exploit."
    ]},
    {type:"list", title:"Practical drawbacks", items:[
      "The key must be as long as the message \u2014 impractical for large data.",
      "The key must be truly random.",
      "Securely distributing such large keys is extremely difficult."
    ]},

    {type:"h2", text:"12. The Data Encryption Standard (DES)"},
    {type:"list", title:"Design overview", items:[
      "Designed to encipher sensitive but non-classified data (NIST, 1977).",
      "A bit-oriented product cipher: it combines transposition AND substitution.",
      "Input, output, and key are each 64 bits; the effective key is 56 bits after parity bits are dropped.",
      "16 rounds of encipherment, each using a different 48-bit round key derived from the main key (via PC-1, shifts, PC-2).",
      "Decipherment uses the same algorithm with the round keys applied in reverse order.",
      "Each round: the right half plus the round key go through function f, the result is XORed into the left half, and the halves are swapped."
    ]},

    {type:"h2", text:"13. The DES f Function and S-Boxes"},
    {type:"steps", title:"Inside the f function", items:[
      "Expand the 32-bit right half to 48 bits.",
      "XOR it with the 48-bit round key.",
      "Split the result into eight 6-bit groups.",
      "Feed each 6-bit group into its S-box, producing 4 bits out.",
      "Concatenate the 8 x 4 = 32 bits and permute them to form the output of f."
    ]},
    {type:"list", title:"Why S-boxes matter", items:[
      "S-boxes are the core non-linear element \u2014 they are what gives DES its strength.",
      "After only 5 rounds, every output bit depends on every input bit and every key bit (the avalanche effect).",
      "The S-box design criteria were originally classified, which raised suspicion of an NSA trapdoor.",
      "Biham and Shamir (1990) later showed the S-boxes were actually designed to RESIST differential cryptanalysis."
    ]},

    {type:"h2", text:"14. DES Weaknesses and Operating Modes"},
    {type:"comparison", title:"Weaknesses and modes", left:{title:"Known weaknesses", points:[
      "56-bit key is too short (warned by Diffie-Hellman, 1976)",
      "4 weak keys (self-inverse) and 12 semi-weak key pairs",
      "Complementation property: DESk(m)=c implies DES of the complement key on the complement message gives the complement ciphertext",
      "By 1998 it could be broken in days with distributed computing",
      "Replaced by AES (Rijndael, 2001)"
    ]}, right:{title:"Operating modes", points:[
      "ECB \u2014 Electronic Code Book (simple, rarely used)",
      "CBC \u2014 Cipher Block Chaining (most common; self-healing)",
      "CFB \u2014 Cipher Feedback (pseudo one-time pad)",
      "OFB \u2014 Output Feedback (pseudo one-time pad)",
      "EDE \u2014 Encrypt-Decrypt-Encrypt (2 keys)",
      "Triple DES \u2014 3-key variant (strongest)"
    ]}},

    {type:"h2", text:"15. Cipher Block Chaining (CBC) Mode"},
    {type:"list", title:"How CBC works", items:[
      "Each ciphertext block depends on the current plaintext block AND the previous ciphertext block.",
      "It needs a 64-bit Initialization Vector (IV) in addition to the 64-bit key."
    ]},
    {type:"formula", title:"CBC equations", lines:["Encipher:  ci = DESk( mi XOR c(i-1) ),  with c0 = IV","Decipher:  mi = DESk inverse( ci ) XOR c(i-1)"], caption:"Chaining each block to the previous one hides patterns that ECB would leak."},
    {type:"callout", tone:"tip", title:"Self-healing property", text:"If one ciphertext block is corrupted, the error propagates for at most two blocks; the system then heals and the following blocks decrypt correctly. CBC is the most widely used DES mode (banking, file encryption, TLS)."},

    {type:"h2", text:"16. From DES to AES"},
    {type:"steps", title:"Timeline", items:[
      "1977: DES published as a US federal standard.",
      "1990: Biham and Shamir introduce differential cryptanalysis (about 2^47 chosen-plaintext pairs).",
      "1993: Matsui introduces linear cryptanalysis (about 2^43 known-plaintext pairs).",
      "1998: any DES message shown breakable in days with custom hardware.",
      "1999: the EFF DES Cracker breaks DES in 22 hours."
    ]},
    {type:"list", title:"The Advanced Encryption Standard (AES)", items:[
      "NIST selected the Rijndael algorithm in late 2001.",
      "Like DES it is a product cipher (substitution + transposition).",
      "Key sizes: 128, 192, or 256 bits. Block size: 128 bits.",
      "Designed specifically to resist differential and linear cryptanalysis."
    ]},

    {type:"h2", text:"17. Survey of Other Classical Ciphers"},
    {type:"table", title:"Other block ciphers", headers:["Cipher","Block","Key","Status"], rows:[
      ["NewDES","64 bits","120 bits","Broken (differential cryptanalysis)"],
      ["FEAL-4","64 bits","64 bits","Broken with 20 chosen plaintexts"],
      ["FEAL-8","64 bits","64 bits","Broken with 10,000 chosen plaintexts"],
      ["REDOC-II","80 bits","160 bits","10 rounds \u2014 resists differential attacks"],
      ["LOKI91","64 bits","64 bits","Resists differential cryptanalysis"],
      ["Khufu","64 bits","512 bits","Resists with 24-32 rounds"],
      ["IDEA","64 bits","128 bits","Used in PGP; appears secure"]
    ]},

    {type:"h2", text:"18. Public-Key Cryptography"},
    {type:"list", title:"The 1976 revolution", items:[
      "Proposed by Diffie and Hellman (1976) \u2014 a radical break from classical cryptography.",
      "Key insight: separate the encipherment key from the decipherment key.",
      "Each user has two keys: a public key (widely published, used to send them a secret) and a private key (kept secret, used to decrypt).",
      "Unlike classical crypto, no shared secret needs to exist before communication.",
      "Encipher with the recipient's public key for confidentiality; encipher with the sender's private key for authentication (a digital signature)."
    ]},

    {type:"h2", text:"19. RSA (Rivest, Shamir, Adleman)"},
    {type:"formula", title:"RSA key generation and operations", lines:[
      "Choose large primes p, q  ->  n = p q  ->  phi(n) = (p-1)(q-1)",
      "Choose e with 1 < e < n and gcd(e, phi(n)) = 1",
      "Find d such that e d = 1 (mod phi(n))",
      "Public key = (e, n)    Private key = d",
      "Encrypt:  c = m^e mod n        Decrypt:  m = c^d mod n"
    ], caption:"Security rests on the difficulty of factoring n = p q (the integer factorization problem)."},
    {type:"list", title:"RSA facts", items:[
      "Practical key size: primes of at least 512 bits each, giving a modulus of at least 1024 bits.",
      "RSA can provide confidentiality, data integrity, AND origin authentication."
    ]},

    {type:"h2", text:"20. RSA \u2014 Numeric Example"},
    {type:"example", title:"Encrypting and decrypting HE", text:"Let p = 7, q = 11, so n = 77 and phi(n) = 60. Alice chooses e = 17, giving d = 53; her public key is (17, 77). Bob encrypts HE = (7, 4): 7^17 mod 77 = 28 and 4^17 mod 77 = 16, so the ciphertext is 28 16. Alice decrypts with d = 53: 28^53 mod 77 = 7 (H) and 16^53 mod 77 = 4 (E)."},
    {type:"callout", tone:"note", title:"Signing", text:"For authentication, Alice enciphers with her private key d = 53; anyone with her public key (17, 77) can verify it. Altering any ciphertext character makes decipherment fail \u2014 which is how tampering is detected."},

    {type:"h2", text:"21. RSA: Confidentiality vs. Authentication"},
    {type:"comparison", title:"Two ways to use RSA", left:{title:"For confidentiality", points:[
      "Sender uses the RECIPIENT's public key to encrypt",
      "Only the recipient can decrypt (with their private key)",
      "Anyone can send secrets to the recipient",
      "Example: Bob encrypts with Alice's public key"
    ]}, right:{title:"For authentication", points:[
      "Sender uses their OWN private key to encrypt",
      "Anyone can decrypt with the sender's public key",
      "This proves the message came from the sender",
      "Any alteration is detectable; Alice signs, Bob verifies"
    ]}},

    {type:"h2", text:"22. Cryptographic Checksums and HMAC"},
    {type:"definition", term:"Cryptographic Checksum (hash)", text:"A function that maps a message of arbitrary length to a fixed-length value (a digest) such that it is computationally infeasible to find two messages with the same digest, or to find a message matching a given digest. It protects integrity by detecting any change to the message."},
    {type:"list", title:"Required properties", items:[
      "One-way: given a digest, it is infeasible to find a message that produces it (preimage resistance).",
      "Collision-resistant: it is infeasible to find two different messages with the same digest.",
      "A small change in the message produces a large, unpredictable change in the digest (avalanche)."
    ]},
    {type:"definition", term:"HMAC (Keyed-Hash Message Authentication Code)", text:"A construction that combines a secret key with a cryptographic hash function to produce a message authentication code. It provides both data integrity and origin authentication: only someone who knows the key can produce or verify the correct HMAC."},

    {type:"summary", title:"Chapter 4 \u2014 Key Takeaways", items:[
      "A cryptosystem is the 5-tuple (E, D, M, K, C); Kerckhoffs's principle says only the key should be secret.",
      "Classical ciphers are symmetric (one shared key) and are either transposition (rearrange) or substitution (replace).",
      "Statistical attacks use language frequency models; the Caesar cipher falls to brute force, and Vigenere falls to Kasiski's method plus the Index of Coincidence.",
      "The one-time pad is provably unbreakable but impractical because of key length and distribution.",
      "DES is a 16-round, 56-bit product cipher whose strength lies in its non-linear S-boxes; it is now obsolete and replaced by AES (128-bit blocks; 128/192/256-bit keys).",
      "Public-key cryptography (Diffie-Hellman, 1976) separates public and private keys, removing the need for a shared secret.",
      "RSA encrypts with c = m^e mod n and decrypts with m = c^d mod n; its security rests on the hardness of factoring. Public key encrypts for confidentiality; private key encrypts for authentication.",
      "Cryptographic checksums and HMAC protect integrity and authenticity."
    ]}
  ]
});
