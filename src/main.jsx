import React, {useMemo, useState} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Sun, Zap, Home, Building2, Factory, Tractor, Store, BriefcaseBusiness, Wrench,
  Landmark, WalletCards, Users, ShoppingCart, Bell, UserCircle, Menu, X, ArrowRight,
  CheckCircle2, Leaf, Calculator, ShieldCheck, BadgeIndianRupee, BatteryCharging,
  PanelTop, Gauge, CalendarDays, MapPin, FileText, CreditCard, HelpCircle, Settings,
  PackageCheck, Search, ChevronRight, Download, LogOut, CircleDollarSign, Activity,
  TrendingUp, Clock3, Ticket, MessageCircle, ClipboardCheck, Banknote, PlugZap,
  ReceiptIndianRupee, CircleHelp, ChartNoAxesCombined
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import "./styles.css";

const quick = [
  {title:"Buy Solar", desc:"Compare systems, customize and purchase.", icon:Sun, to:"/buy-solar"},
  {title:"Solar Services", desc:"Installation, maintenance, repair & AMC.", icon:Wrench, to:"/services"},
  {title:"Solar Loans", desc:"Check eligibility, EMI and loan plans.", icon:Landmark, to:"/loans"},
  {title:"Sell Surplus Power", desc:"Track net metering and earnings.", icon:Zap, to:"/surplus"},
  {title:"Solar Calculator", desc:"Estimate capacity, savings and payback.", icon:Calculator, to:"/calculator"},
  {title:"Government Support", desc:"Subsidy eligibility and guidance.", icon:BadgeIndianRupee, to:"/government-support"},
  {title:"Credits & Rewards", desc:"Earn and use eligible SolarConnect credits.", icon:WalletCards, to:"/credits"},
  {title:"Referral Program", desc:"Invite friends and earn rewards.", icon:Users, to:"/referrals"},
];

const productCats = [
  ["Solar Panels", PanelTop, "/marketplace/panels"],
  ["Inverters", Zap, "/marketplace/inverters"],
  ["Batteries", BatteryCharging, "/marketplace/batteries"],
  ["Solar Lights", Sun, "/marketplace/lights"],
  ["Solar Pumps", Tractor, "/marketplace/pumps"],
  ["Cables & Accessories", PlugZap, "/marketplace/accessories"],
];

const buyTypes = [
  ["Home", Home], ["Apartment", Building2], ["Shop", Store],
  ["Office", BriefcaseBusiness], ["Factory", Factory], ["Agriculture", Tractor]
];

const serviceTypes = ["Installation","Maintenance","Cleaning","Repair","Inverter Service","Panel Replacement","AMC"];

const navItems = [
  ["Dashboard","/dashboard",Gauge],
  ["Buy Solar","/buy-solar",Sun],
  ["Services","/services",Wrench],
  ["Solar Loans","/loans",Landmark],
  ["Sell Surplus","/surplus",Zap],
  ["Calculator","/calculator",Calculator],
  ["Government Support","/government-support",BadgeIndianRupee],
  ["Marketplace","/marketplace/panels",ShoppingCart],
  ["My Orders","/orders",PackageCheck],
  ["My Solar System","/solar-system",PanelTop],
  ["Payments / Wallet","/wallet",WalletCards],
  ["Notifications","/notifications",Bell],
  ["Profile","/profile",UserCircle],
  ["Help & Support","/support",HelpCircle],
];

const generation = [
  {m:"Jan", v:210}, {m:"Feb", v:240}, {m:"Mar", v:258}, {m:"Apr", v:235},
  {m:"May", v:286}, {m:"Jun", v:265}, {m:"Jul", v:310}
];

function Layout({children}) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const publicPage = ["/","/login","/signup"].includes(location.pathname);
  return publicPage ? <>{children}</> : (
    <div className="app-shell">
      <aside className={open ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <div className="brand-mark"><Sun size={20}/></div>
          <span>Solar<span>Connect</span></span>
          <button className="icon-btn mobile-only" onClick={()=>setOpen(false)}><X/></button>
        </div>
        <div className="side-scroll">
          <div className="side-label">Workspace</div>
          {navItems.map(([label,to,Icon]) => (
            <NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?"side-link active":"side-link"}>
              <Icon size={18}/><span>{label}</span>
            </NavLink>
          ))}
          <div className="side-label">Admin</div>
          <NavLink to="/admin" onClick={()=>setOpen(false)} className={({isActive})=>isActive?"side-link active admin-link":"side-link admin-link"}>
            <Settings size={18}/><span>Admin Dashboard</span>
          </NavLink>
        </div>
        <div className="sidebar-bottom">
          <div className="mini-user"><div className="avatar">J</div><div><b>Jagadheesh</b><small>Solar customer</small></div></div>
          <Link className="logout" to="/"><LogOut size={16}/> Logout</Link>
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <button className="icon-btn mobile-only" onClick={()=>setOpen(true)}><Menu/></button>
          <div className="crumb">{location.pathname === "/dashboard" ? "Overview" : "SolarConnect"}</div>
          <div className="top-actions">
            <Link to="/notifications" className="icon-btn"><Bell size={19}/><span className="dot"/></Link>
            <Link to="/profile" className="avatar">J</Link>
          </div>
        </header>
        <div className="page-wrap">{children}</div>
      </main>
    </div>
  );
}

function PublicNav(){
  return <header className="public-nav">
    <Link to="/" className="brand"><div className="brand-mark"><Sun size={20}/></div><span>Solar<span>Connect</span></span></Link>
    <nav className="public-links">
      <a href="#features">Solutions</a><a href="#marketplace">Marketplace</a><a href="#support">Support</a>
    </nav>
    <div className="nav-actions"><Link className="btn ghost" to="/login">Login</Link><Link className="btn primary" to="/signup">Sign Up <ArrowRight size={16}/></Link></div>
  </header>
}

function Landing(){
  return <div className="landing">
    <PublicNav/>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Leaf size={15}/> India-ready clean energy platform</div>
        <h1>Power your future with <span>solar.</span></h1>
        <p>Buy, finance, install, monitor and earn from your solar system — all from one connected platform.</p>
        <div className="hero-actions">
          <Link className="btn primary big" to="/signup">Get Started <ArrowRight size={18}/></Link>
          <Link className="btn white big" to="/calculator"><Calculator size={18}/> Calculate Solar</Link>
        </div>
        <div className="trust-row"><span><CheckCircle2 size={16}/> Verified partners</span><span><ShieldCheck size={16}/> Secure payments</span><span><Zap size={16}/> Smart monitoring</span></div>
      </div>
      <div className="solar-scene">
        <div className="sun-orb"><Sun size={46}/></div>
        <div className="house">
          <div className="roof"><div className="panel-grid">{Array.from({length:18}).map((_,i)=><i key={i}/>)}</div></div>
          <div className="house-body"><div className="window"/><div className="door"/></div>
        </div>
        <div className="energy-pill"><Zap size={17}/><div><b>5.2 kWh</b><small>generated today</small></div></div>
        <div className="saving-pill"><TrendingUp size={17}/><div><b>₹4,350</b><small>estimated savings</small></div></div>
      </div>
    </section>
    <section className="stats-strip">
      <div><b>5+ GW</b><span>systems enabled</span></div><div><b>25K+</b><span>happy customers</span></div><div><b>98%</b><span>service satisfaction</span></div><div><b>24/7</b><span>platform support</span></div>
    </section>
    <section id="features" className="section">
      <div className="section-head"><div><div className="eyebrow">Everything connected</div><h2>One platform for your solar journey</h2></div><p>From first calculation to long-term maintenance, SolarConnect keeps every step simple and trackable.</p></div>
      <div className="feature-grid">
        {quick.map(({title,desc,icon:Icon,to})=><Link className="feature-card" to={to} key={title}><div className="feature-icon"><Icon size={22}/></div><h3>{title}</h3><p>{desc}</p><span className="card-link">Explore <ArrowRight size={15}/></span></Link>)}
      </div>
    </section>
    <section id="marketplace" className="section muted-section">
      <div className="section-head"><div><div className="eyebrow">Solar marketplace</div><h2>Everything your system needs</h2></div><Link className="text-link" to="/marketplace/panels">View marketplace <ArrowRight size={16}/></Link></div>
      <div className="category-grid">{productCats.map(([t,I,to])=><Link to={to} className="category-card" key={t}><I size={24}/><b>{t}</b><span>Browse products <ChevronRight size={15}/></span></Link>)}</div>
    </section>
    <section className="cta-section"><div><div className="eyebrow">Start saving today</div><h2>Know your solar potential in 60 seconds.</h2><p>Enter your bill, usage and roof area to get a practical solar estimate.</p></div><Link className="btn primary big" to="/calculator">Open Solar Calculator <ArrowRight size={18}/></Link></section>
    <footer id="support"><div className="brand"><div className="brand-mark"><Sun size={18}/></div><span>Solar<span>Connect</span></span></div><p>Clean energy, connected.</p><div><Link to="/support">Help & Support</Link><Link to="/government-support">Government Support</Link><Link to="/login">Login</Link></div></footer>
  </div>
}

function Auth({signup=false}){
  const navigate=useNavigate();
  const [otp,setOtp]=useState(false);
  const submit=e=>{e.preventDefault(); if(!otp){setOtp(true)} else navigate("/dashboard")};
  return <div className="auth-page"><div className="auth-visual"><Link to="/" className="brand"><div className="brand-mark"><Sun size={20}/></div><span>Solar<span>Connect</span></span></Link><div><div className="eyebrow"><Leaf size={15}/> Clean energy, one connected platform</div><h1>{signup?"Build your solar journey.":"Welcome back to your energy dashboard."}</h1><p>Track generation, savings, services, payments, credits and more.</p></div><div className="auth-mini"><CheckCircle2/> Trusted solar partners <span>•</span> Secure account</div></div>
  <div className="auth-card"><Link to="/" className="mobile-brand brand"><div className="brand-mark"><Sun size={18}/></div><span>Solar<span>Connect</span></span></Link><div className="eyebrow">{otp?"Step 2 of 2":"Step 1 of 2"}</div><h2>{otp?"Verify your account":"Create your account"}</h2><p>{otp?"Enter the 6-digit OTP sent to your mobile/email.":"Start buying, monitoring and earning with solar."}</p><form onSubmit={submit}>{!otp&&<><label>Full name<input required placeholder="Your name"/></label><label>Email / Mobile<input required placeholder="you@example.com"/></label><label>Password<input required type="password" placeholder="••••••••"/></label></>}{otp&&<label>One-time password<input required inputMode="numeric" maxLength={6} placeholder="123456"/></label>}<button className="btn primary full">{otp?"Verify & Continue":"Continue"} <ArrowRight size={17}/></button></form>{!otp&&<p className="switch">Already have an account? <Link to="/login">Login</Link></p>}{otp&&<button className="text-button" onClick={()=>setOtp(false)}>Back</button>}</div></div>
}

function PageTitle({eyebrow,title,desc,action}){return <div className="page-title"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{desc}</p></div>{action}</div>}

function Dashboard(){
  const navigate=useNavigate();
  const activities=[["Payment Received","₹2,000 credits added",CircleDollarSign],["Service Completed","Inverter maintenance",CheckCircle2],["Loan Approved","₹1,50,000",Landmark]];
  return <><PageTitle eyebrow="Good morning" title="Welcome back, Jagadheesh 👋" desc="Here’s your solar performance at a glance." action={<Link className="btn primary" to="/calculator"><Calculator size={17}/> Recalculate</Link>}/>
  <div className="metric-grid">
    {[["Today's Generation","12.45 kWh",Zap,"+8.4%"],["This Month","245 kWh",ChartNoAxesCombined,"+12.2%"],["Total Savings","₹4,350",TrendingUp,"+₹620"],["Available Credits","2,500",WalletCards,"+300"]].map(([t,v,I,d])=><button className="metric-card" key={t} onClick={()=>navigate(t==="Available Credits"?"/credits":"/solar-system")}><div className="metric-icon"><I size={19}/></div><div><small>{t}</small><strong>{v}</strong><span className="positive">{d}</span></div></button>)}
  </div>
  <div className="dashboard-grid">
    <div className="panel large"><div className="panel-head"><div><h3>Generation overview</h3><span>Monthly generation (kWh)</span></div><Link className="text-link" to="/solar-system">View system <ArrowRight size={15}/></Link></div><div className="chart"><ResponsiveContainer width="100%" height={260}><AreaChart data={generation}><XAxis dataKey="m"/><YAxis/><Tooltip/><Area type="monotone" dataKey="v" fillOpacity={0.12} strokeWidth={3}/></AreaChart></ResponsiveContainer></div></div>
    <div className="panel"><div className="panel-head"><div><h3>My Solar System</h3><span>On-grid system</span></div><PanelTop size={22}/></div><div className="system-capacity"><strong>5 kW</strong><span>Installed 12 Mar 2024</span></div><div className="system-list"><span>Panel status <b className="status good">Healthy</b></span><span>Inverter <b>5 kW Hybrid</b></span><span>Warranty <b>8 years</b></span></div><Link className="btn outline full" to="/solar-system">View details</Link></div>
  </div>
  <div className="panel"><div className="panel-head"><div><h3>Quick access</h3><span>Continue your solar journey</span></div></div><div className="quick-grid">{quick.slice(0,6).map(({title,icon:Icon,to})=><Link to={to} className="quick-card" key={title}><Icon/><span>{title}</span></Link>)}</div></div>
  <div className="two-col"><div className="panel"><div className="panel-head"><div><h3>Energy & savings</h3><span>Current month</span></div></div><div className="progress-row"><div><span>Generation</span><b>245 / 300 kWh</b></div><div className="progress"><i style={{width:"82%"}}/></div></div><div className="progress-row"><div><span>Consumption</span><b>180 / 240 kWh</b></div><div className="progress"><i style={{width:"75%"}}/></div></div><div className="saving-highlight"><TrendingUp/><div><small>Estimated savings</small><b>₹4,350</b></div><span>This month</span></div></div>
  <div className="panel"><div className="panel-head"><div><h3>Recent activity</h3><span>Latest account events</span></div><Link className="text-link" to="/notifications">See all</Link></div>{activities.map(([a,b,I])=><div className="activity" key={a}><div className="activity-icon"><I size={16}/></div><div><b>{a}</b><span>{b}</span></div><small>Today</small></div>)}</div></div></>
}

function BuySolar(){
  const [step,setStep]=useState(0);
  const [type,setType]=useState("Home");
  const [bill,setBill]=useState("1200");
  const [roof,setRoof]=useState("800");
  const [capacity,setCapacity]=useState("5");
  const navigate=useNavigate();
  const recommended=useMemo(()=>Math.max(1,Math.min(10,Math.round(Number(bill||0)/250))),[bill]);
  return <><PageTitle eyebrow="Buy Solar" title="Choose the right solar system" desc="Tell us about your property and we’ll recommend a practical system."/>
  <div className="stepper">{["Property","Energy details","Recommendation","Packages","Product","Checkout"].map((s,i)=><div className={i<=step?"step active":"step"} key={s}><span>{i+1}</span>{s}</div>)}</div>
  {step===0&&<div className="panel flow-panel"><h3>1. Choose property type</h3><p>Select where the solar system will be installed.</p><div className="type-grid">{buyTypes.map(([t,I])=><button className={type===t?"type-card selected":"type-card"} onClick={()=>setType(t)} key={t}><I/><b>{t}</b><span>Solar for {t.toLowerCase()}</span></button>)}</div><button className="btn primary" onClick={()=>setStep(1)}>Continue <ArrowRight size={16}/></button></div>}
  {step===1&&<div className="panel form-panel"><h3>2. Energy & roof details</h3><div className="form-grid"><label>Monthly electricity bill (₹)<input value={bill} onChange={e=>setBill(e.target.value)}/></label><label>Monthly units consumed<input placeholder="350 kWh"/></label><label>Roof area (sq.ft)<input value={roof} onChange={e=>setRoof(e.target.value)}/></label><label>Location<input placeholder="Hyderabad, Telangana"/></label></div><div className="notice"><MapPin/> Your location helps estimate sunlight and local support.</div><button className="btn primary" onClick={()=>{setCapacity(String(recommended));setStep(2)}}>Get recommendation <ArrowRight size={16}/></button></div>}
  {step===2&&<div className="panel recommendation"><div className="rec-visual"><Sun size={48}/></div><div><div className="eyebrow">3. Solar recommendation</div><h2>{capacity} kW recommended system</h2><p>Estimated generation: <b>{Number(capacity)*115}–{Number(capacity)*135} kWh/month</b></p><p>Estimated savings: <b>₹{(Number(capacity)*900).toLocaleString("en-IN")}–₹{(Number(capacity)*1100).toLocaleString("en-IN")} / month</b></p><p>Expected payback: <b>4–5 years</b></p><button className="btn primary" onClick={()=>setStep(3)}>View packages <ArrowRight size={16}/></button></div></div>}
  {step===3&&<PackageStep capacity={capacity} onNext={()=>setStep(4)}/>}
  {step===4&&<ProductStep onNext={()=>setStep(5)}/>}
  {step===5&&<CheckoutStep onDone={()=>navigate("/orders")}/>}
  </>;
}

function PackageStep({capacity,onNext}){
  const packs=[1,2,3,5,10];
  const [selected,setSelected]=useState(Number(capacity)||5);
  return <div className="panel flow-panel"><h3>4. Choose your package</h3><div className="package-grid">{packs.map(k=><button className={selected===k?"package selected":"package"} onClick={()=>setSelected(k)} key={k}><span>{k} kW</span><b>₹{(k*52000).toLocaleString("en-IN")}</b><small>Panels + inverter + BOS</small><i>5–8 year warranty</i></button>)}</div><button className="btn primary" onClick={onNext}>Continue with {selected} kW <ArrowRight size={16}/></button></div>
}
function ProductStep({onNext}){
  return <div className="panel flow-panel"><h3>5. Product details & customization</h3><div className="product-detail"><div className="product-art"><PanelTop size={64}/></div><div><h2>SolarConnect Smart 5 kW Kit</h2><p>Tier-1 panels • Hybrid inverter • Mounting structure • Monitoring</p><div className="tag-row"><span>High efficiency</span><span>On-grid ready</span><span>8 yr warranty</span></div><h3>₹2,75,000</h3><button className="btn primary" onClick={onNext}>Add to cart <ShoppingCart size={16}/></button></div></div></div>
}
function CheckoutStep({onDone}){
  return <div className="panel flow-panel"><h3>6. Checkout & payment</h3><div className="checkout-grid"><div><label>Delivery / installation address<textarea placeholder="Enter complete address"/></label><label>Payment method<select><option>UPI</option><option>Card</option><option>Net Banking</option></select></label></div><div className="summary"><h3>Order summary</h3><span>Solar kit <b>₹2,75,000</b></span><span>Installation <b>₹15,000</b></span><span>Credits <b>-₹1,000</b></span><hr/><strong>Total ₹2,89,000</strong><button className="btn primary full" onClick={onDone}>Proceed to Pay <CreditCard size={16}/></button></div></div></div>
}

function Services(){
  const [selected,setSelected]=useState("Installation");
  const [booked,setBooked]=useState(false);
  if(booked) return <><PageTitle eyebrow="Service confirmed" title="Your service is booked" desc="Our service team will contact you shortly."/><div className="success-card"><CheckCircle2 size={64}/><h2>{selected} scheduled successfully</h2><p>28 Aug 2026 • 11:00 AM • Hyderabad</p><Link className="btn primary" to="/support">Track service <ArrowRight size={16}/></Link></div></>;
  return <><PageTitle eyebrow="Solar Services" title="Keep your system performing at its best" desc="Book verified installation, maintenance and repair services."/>
  <div className="stepper"><div className="step active"><span>1</span>Service</div><div className="step"><span>2</span>Date & time</div><div className="step"><span>3</span>Address</div><div className="step"><span>4</span>Confirmation</div></div>
  <div className="panel flow-panel"><h3>1. Select service</h3><div className="service-grid">{serviceTypes.map(s=><button className={selected===s?"service-card selected":"service-card"} onClick={()=>setSelected(s)} key={s}><Wrench/><b>{s}</b><span>{s==="AMC"?"Annual preventive care":"Professional solar support"}</span></button>)}</div><div className="form-grid compact"><label>Date<select><option>28 Aug 2026</option><option>29 Aug 2026</option><option>30 Aug 2026</option></select></label><label>Time<select><option>11:00 AM</option><option>2:00 PM</option><option>4:00 PM</option></select></label><label className="wide">Address<textarea placeholder="Enter service address"/></label></div><button className="btn primary" onClick={()=>setBooked(true)}>Confirm booking <CheckCircle2 size={16}/></button></div></>
}

function Loans(){
  const [amount,setAmount]=useState(150000); const [rate,setRate]=useState(9.5); const [years,setYears]=useState(5);
  const emi=useMemo(()=>{const r=rate/12/100,n=years*12; return Math.round(amount*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1))},[amount,rate,years]);
  return <><PageTitle eyebrow="Solar Loans" title="Finance your solar investment" desc="Check eligibility, compare plans, calculate EMI and apply online."/>
  <div className="loan-tabs"><Link className="tab active" to="/loans">Eligibility</Link><a className="tab" href="#emi">EMI Calculator</a><a className="tab" href="#plans">Loan Plans</a><a className="tab" href="#docs">Documents</a></div>
  <div className="two-col" id="emi"><div className="panel form-panel"><h3>EMI Calculator</h3><label>Loan amount ₹<input type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))}/></label><label>Interest rate <input type="number" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))}/></label><label>Tenure (years)<input type="number" value={years} onChange={e=>setYears(Number(e.target.value))}/></label><button className="btn primary">Calculate EMI</button></div><div className="panel emi-result"><div className="eyebrow">Estimated monthly EMI</div><strong>₹{emi.toLocaleString("en-IN")} / month</strong><span>Total payment ₹{(emi*years*12).toLocaleString("en-IN")}</span><span>Total interest ₹{(emi*years*12-amount).toLocaleString("en-IN")}</span><Link className="btn outline" to="/profile">Apply for loan <ArrowRight size={16}/></Link></div></div>
  <div id="plans" className="panel"><div className="panel-head"><div><h3>Loan plans</h3><span>Compare indicative plans</span></div></div><div className="table-wrap"><table><thead><tr><th>Plan</th><th>Interest</th><th>Tenure</th><th>Amount</th><th/></tr></thead><tbody>{[["Green Start","8.99%","3 years","Up to ₹2L"],["Solar Plus","9.50%","5 years","Up to ₹5L"],["Eco Upgrade","10.25%","7 years","Up to ₹10L"]].map(r=><tr key={r[0]}>{r.map((x,i)=><td key={i}>{x}</td>)}<td><button className="btn small primary">Compare</button></td></tr>)}</tbody></table></div></div>
  <div id="docs" className="panel"><h3>Required documents</h3><div className="doc-grid"><span><FileText/> PAN / ID proof</span><span><ReceiptIndianRupee/> Electricity bill</span><span><Banknote/> Bank statement</span><span><ClipboardCheck/> Property documents</span></div></div></>
}

function Surplus(){
  const [units,setUnits]=useState(450); const consumed=300; const surplus=Math.max(0,units-consumed); const earnings=surplus*2.4;
  return <><PageTitle eyebrow="Sell Surplus Power" title="Turn extra solar into value" desc="Monitor generation, net metering, exported units and settlement history."/>
  <div className="metric-grid">{[["Generated Energy",`${units} kWh`,Zap],["Consumed Energy",`${consumed} kWh`,Activity],["Surplus Energy",`${surplus} kWh`,TrendingUp],["Net Metering","Active",Landmark]].map(([t,v,I])=><div className="metric-card" key={t}><div className="metric-icon"><I/></div><div><small>{t}</small><strong>{v}</strong></div></div>)}</div>
  <div className="two-col"><div className="panel"><h3>Energy flow</h3><div className="energy-flow"><div><Zap/><b>{units}</b><span>Generated</span></div><ArrowRight/><div><Home/><b>{consumed}</b><span>Consumed</span></div><ArrowRight/><div><CircleDollarSign/><b>{surplus}</b><span>Exported</span></div></div><div className="notice good-notice"><CheckCircle2/> Net metering is active. Estimated earnings this cycle: <b>₹{earnings.toLocaleString("en-IN")}</b></div></div>
  <div className="panel"><div className="panel-head"><div><h3>Settlement</h3><span>Latest payout</span></div></div><div className="settlement"><small>Last settlement</small><strong>₹860</strong><span>10 May 2026 • Paid</span><button className="btn outline">View history</button></div></div></div>
  <div className="panel"><div className="panel-head"><div><h3>Monthly export</h3><span>Exported units and earnings</span></div></div><ResponsiveContainer width="100%" height={250}><BarChart data={[{m:"Jan",u:80},{m:"Feb",u:120},{m:"Mar",u:95},{m:"Apr",u:150},{m:"May",u:130},{m:"Jun",u:170}]}><XAxis dataKey="m"/><YAxis/><Tooltip/><Bar dataKey="u" radius={[7,7,0,0]}/></BarChart></ResponsiveContainer></div></>
}

function CalculatorPage(){
  const [bill,setBill]=useState(3000),[units,setUnits]=useState(450),[roof,setRoof]=useState(900),[location,setLocation]=useState("Hyderabad");
  const capacity=Math.max(1,Math.min(10,Math.round(Math.max(units/100, bill/800))));
  const gen=capacity*125; const savings=capacity*1050; const payback=(capacity*55000/(savings*12)).toFixed(1);
  return <><PageTitle eyebrow="Solar Calculator" title="Estimate your solar potential" desc="Use your electricity usage and roof area for a quick planning estimate."/>
  <div className="calculator-layout"><div className="panel form-panel"><h3>Your details</h3><label>Location<input value={location} onChange={e=>setLocation(e.target.value)}/></label><label>Monthly electricity bill (₹)<input type="number" value={bill} onChange={e=>setBill(Number(e.target.value))}/></label><label>Units consumed / month<input type="number" value={units} onChange={e=>setUnits(Number(e.target.value))}/></label><label>Roof area (sq.ft)<input type="number" value={roof} onChange={e=>setRoof(Number(e.target.value))}/></label><button className="btn primary">Calculate <Calculator size={16}/></button></div>
  <div className="panel result-card"><div className="sun-result"><Sun size={32}/></div><div className="eyebrow">Recommended system</div><h2>{capacity} kW</h2><div className="result-grid"><span>Estimated generation<b>{gen} kWh / month</b></span><span>Estimated savings<b>₹{savings.toLocaleString("en-IN")} / month</b></span><span>Approx. payback<b>{payback} years</b></span><span>Roof fit<b>{capacity*100 <= roof ? "Good" : "Optimize"}</b></span></div><Link className="btn primary" to="/buy-solar">Explore packages <ArrowRight size={16}/></Link></div></div></>
}

function Government(){
  return <><PageTitle eyebrow="Government Support" title="Understand subsidies and incentives" desc="Check eligibility, required documents and application guidance."/><div className="info-grid">{[["Subsidy Information","Understand applicable residential solar support.",BadgeIndianRupee],["Eligibility","Check property and system criteria.",ClipboardCheck],["Documents","Electricity bill, ID and bank details.",FileText],["Application Guidance","Step-by-step application assistance.",HelpCircle],["Application Status","Track your subsidy workflow.",Activity]].map(([t,d,I])=><Link className="info-card" to="/support" key={t}><I/><div><h3>{t}</h3><p>{d}</p></div><ChevronRight/></Link>)}</div><div className="panel notice"><ShieldCheck/><div><b>Important:</b> Subsidy rules and amounts can change. SolarConnect can guide you through the current process, while final approval is made by the relevant government authority.</div></div></>
}

function Marketplace({category="Solar Panels"}){
  const products=[
    ["SunMax Mono 550W","Solar Panels","₹18,500",PanelTop],
    ["Connect Hybrid 5kW","Inverters","₹82,000",Zap],
    ["PowerVault 5kWh","Batteries","₹1,20,000",BatteryCharging],
    ["RayLite 80W","Solar Lights","₹4,800",Sun],
    ["AgriFlow Solar Pump","Solar Pumps","₹72,000",Tractor],
    ["SafeWire Solar Kit","Cables & Accessories","₹8,500",PlugZap]
  ];
  const items=products.filter(p=>category==="Solar Panels"||p[1]===category);
  return <><PageTitle eyebrow="Marketplace" title={category} desc="Explore solar hardware from verified product categories."/><div className="category-tabs">{productCats.map(([t,I,to])=><Link className={category===t?"tab active":"tab"} to={to} key={t}><I size={16}/>{t}</Link>)}</div><div className="product-grid">{items.map(([name,cat,price,I])=><Link to="/buy-solar" className="product-card" key={name}><div className="product-img"><I size={52}/></div><div className="product-meta"><small>{cat}</small><h3>{name}</h3><b>{price}</b><span>Compare • Customize <ArrowRight size={14}/></span></div></Link>)}</div></>
}

function Orders(){
  const orders=[["SC-10243","5 kW Solar System","₹2,89,000","Installation scheduled","In transit"],["SC-10187","Inverter Service","₹4,500","Completed","Delivered"],["SC-10091","Solar Lights","₹9,600","Delivered","Delivered"]];
  return <><PageTitle eyebrow="My Orders" title="Orders & installation tracking" desc="Follow payment, delivery, installation and warranty milestones."/><div className="panel"><div className="table-wrap"><table><thead><tr><th>Order</th><th>Item</th><th>Payment</th><th>Status</th><th>Delivery</th><th/></tr></thead><tbody>{orders.map(r=><tr key={r[0]}>{r.map((x,i)=><td key={i}>{i===3?<b className="status good">{x}</b>:x}</td>)}<td><button className="btn small outline">Track</button></td></tr>)}</tbody></table></div></div></>
}

function SolarSystem(){
  return <><PageTitle eyebrow="My Solar System" title="5 kW on-grid solar system" desc="Monitor equipment, generation, warranty and maintenance history."/><div className="system-hero"><div className="system-big"><Sun size={45}/><strong>5 kW</strong><span>Healthy system</span></div><div><span>Installed</span><b>12 Mar 2024</b></div><div><span>Warranty</span><b>8 years</b></div><div><span>Today's generation</span><b>12.45 kWh</b></div></div><div className="two-col"><div className="panel"><h3>Equipment</h3>{[["Solar panels","10 × 550W Tier-1 panels",PanelTop],["Inverter","5 kW Hybrid Inverter",Zap],["Battery","5 kWh LiFePO₄",BatteryCharging]].map(([a,b,I])=><div className="equipment" key={a}><I/><div><b>{a}</b><span>{b}</span></div><CheckCircle2 className="ok"/></div>)}</div><div className="panel"><h3>Maintenance history</h3>{["12 Aug 2026 — Routine inspection","10 May 2026 — Inverter service","12 Mar 2026 — Annual maintenance"].map(x=><div className="timeline" key={x}><CheckCircle2/><span>{x}</span></div>)}</div></div></>
}

function Wallet(){
  return <><PageTitle eyebrow="Payments & Wallet" title="Your money, credits and invoices" desc="Track transactions, refunds, coupons and SolarConnect credits."/><div className="metric-grid">{[["Wallet balance","₹12,500",WalletCards],["Available credits","2,500",CircleDollarSign],["Coupons","4 active",BadgeIndianRupee],["Refunds","₹1,250",ReceiptIndianRupee]].map(([a,b,I])=><div className="metric-card" key={a}><div className="metric-icon"><I/></div><div><small>{a}</small><strong>{b}</strong></div></div>)}</div><div className="panel"><div className="panel-head"><div><h3>Transactions</h3><span>Latest payments and refunds</span></div><button className="btn outline"><Download size={15}/> Invoices</button></div><div className="table-wrap"><table><thead><tr><th>Date</th><th>Description</th><th>Method</th><th>Amount</th><th>Status</th></tr></thead><tbody>{[["28 Aug 2026","Solar system booking","UPI","₹50,000","Paid"],["18 Aug 2026","Service booking","Card","₹4,500","Paid"],["10 Aug 2026","Refund — cancelled order","Wallet","₹1,250","Refunded"]].map(r=><tr key={r[1]}>{r.map((x,i)=><td key={i}>{i===4?<b className="status good">{x}</b>:x}</td>)}</tr>)}</tbody></table></div></div></>
}

function Notifications(){
  const data=[["Order update","Your 5 kW system has reached the installation stage.",PackageCheck],["Service reminder","Inverter maintenance is due next month.",Wrench],["Credit reward","+300 credits added for an eligible purchase.",WalletCards],["Loan update","Your application documents are ready for review.",Landmark],["Payment","₹2,000 credits were added to your wallet.",CreditCard]];
  return <><PageTitle eyebrow="Notifications" title="Stay in the loop" desc="Orders, services, loans, credits and maintenance reminders."/><div className="notification-list">{data.map(([a,b,I])=><div className="notification" key={a}><div className="notification-icon"><I/></div><div><b>{a}</b><p>{b}</p><small>Today • 10:30 AM</small></div><ChevronRight/></div>)}</div></>
}

function Profile(){
  return <><PageTitle eyebrow="Profile" title="Account & security" desc="Manage personal details, address, electricity information and KYC."/><div className="two-col"><div className="panel form-panel"><h3>Personal details</h3><div className="form-grid"><label>Full name<input defaultValue="Jagadheesh"/></label><label>Email<input defaultValue="jagadheesh@example.com"/></label><label>Mobile<input defaultValue="+91 98XXXXXX21"/></label><label>Address<input defaultValue="Hyderabad, Telangana"/></label></div><button className="btn primary">Save changes</button></div><div className="panel"><h3>KYC & security</h3><div className="security-row"><ShieldCheck/><div><b>KYC status</b><span className="status good">Verified</span></div></div><div className="security-row"><LockIcon/><div><b>Two-factor authentication</b><span>Enabled</span></div></div><div className="security-row"><FileText/><div><b>Electricity details</b><span>Consumer ID •••• 4821</span></div></div><button className="btn outline">Update security</button></div></div></>
}
function LockIcon(){return <ShieldCheck size={20}/>}

function Credits(){
  return <><PageTitle eyebrow="Credits & Rewards" title="Earn credits. Save on solar." desc="Credits can be earned through genuine referrals and eligible purchases/services and used for eligible SolarConnect purchases or services."/><div className="metric-grid">{[["Available Credits","2,500",WalletCards],["Pending Credits","500",Clock3],["Used Credits","1,000",CreditCard],["Lifetime Earned","4,000",TrendingUp]].map(([a,b,I])=><div className="metric-card" key={a}><div className="metric-icon"><I/></div><div><small>{a}</small><strong>{b}</strong></div></div>)}</div><div className="two-col"><div className="panel"><h3>Earn credits</h3>{[["Refer a friend","+100"],["Eligible solar purchase","+2,000"],["Service booking","+200"]].map(r=><div className="credit-row" key={r[0]}><CheckCircle2/><span>{r[0]}</span><b>{r[1]}</b></div>)}</div><div className="panel"><h3>Use credits</h3>{["Solar purchase","Service booking","Accessories"].map(x=><div className="credit-row" key={x}><WalletCards/><span>{x}</span><button className="btn small outline">Use</button></div>)}</div></div><div className="panel"><h3>Credit history</h3><div className="table-wrap"><table><thead><tr><th>Date</th><th>Activity</th><th>Type</th><th>Credits</th></tr></thead><tbody>{[["02 May 2026","Referral — User A","Earn","+3,000"],["25 Apr 2026","Service booking","Earn","+200"],["20 Apr 2026","Solar purchase","Use","-500"]].map(r=><tr key={r[1]}>{r.map((x,i)=><td key={i}>{x}</td>)}</tr>)}</tbody></table></div></div></>
}

function Referrals(){
  return <><PageTitle eyebrow="Referral Program" title="Invite friends. Earn rewards." desc="Share your referral link and track registrations, purchases and rewards."/><div className="referral-hero"><div><div className="eyebrow">Your referral code</div><h2>SOLAR-JAGA123</h2><p>Earn eligible credits when friends join and complete qualifying actions.</p></div><div className="qr"><span>QR</span></div><div className="hero-actions"><button className="btn primary">Copy link</button><button className="btn white">Share via WhatsApp</button></div></div><div className="panel"><h3>My referrals</h3><div className="referral-list">{["User A — Purchased • +2,000 credits","User B — Registered • +100 credits","User C — Pending"].map(x=><div key={x}><Users/><span>{x}</span><ChevronRight/></div>)}</div></div></>
}

function Support(){
  const cards=[["FAQ","Find quick answers",CircleHelp],["Chat support","Talk to SolarConnect support",MessageCircle],["Complaints","Raise a complaint",Ticket],["Service tickets","Create or manage a ticket",ClipboardCheck],["Ticket tracking","Track resolution progress",Activity]];
  return <><PageTitle eyebrow="Help & Support" title="We’re here to help" desc="Get answers, chat with support or track a service issue."/><div className="info-grid">{cards.map(([t,d,I])=><Link className="info-card" to="/notifications" key={t}><I/><div><h3>{t}</h3><p>{d}</p></div><ChevronRight/></Link>)}</div><div className="panel"><h3>Raise a ticket</h3><div className="form-grid"><label>Category<select><option>Installation</option><option>Payment</option><option>Product</option><option>Service</option></select></label><label>Subject<input placeholder="Brief issue summary"/></label><label className="wide">Description<textarea placeholder="Tell us what happened..."/></label></div><button className="btn primary">Submit ticket <Ticket size={16}/></button></div></>
}

function Admin(){
  const cards=[["Users","25,480",Users],["Products","842",ShoppingCart],["Orders","1,284",PackageCheck],["Installations","312",Wrench],["Services","508",ClipboardCheck],["Loans","186",Landmark],["Referrals","6,420",Users],["Credits","₹18.4L",WalletCards],["Payments","₹3.2Cr",CreditCard],["Complaints","42",Ticket],["Subsidies","1,082",BadgeIndianRupee],["Reports","24",ChartNoAxesCombined]];
  return <><PageTitle eyebrow="Admin control center" title="SolarConnect Admin Dashboard" desc="Manage platform operations, customers, products, finance and support." action={<button className="btn primary"><Download size={16}/> Export report</button>}/><div className="admin-grid">{cards.map(([a,b,I])=><Link className="admin-card" to="/admin" key={a}><div className="metric-icon"><I/></div><span>{a}</span><strong>{b}</strong><small>Manage <ArrowRight size={13}/></small></Link>)}</div><div className="two-col"><div className="panel"><h3>Platform activity</h3><ResponsiveContainer width="100%" height={250}><AreaChart data={[{m:"Mon",v:120},{m:"Tue",v:160},{m:"Wed",v:145},{m:"Thu",v:210},{m:"Fri",v:190},{m:"Sat",v:245},{m:"Sun",v:230}]}><XAxis dataKey="m"/><YAxis/><Tooltip/><Area type="monotone" dataKey="v" fillOpacity={0.12} strokeWidth={3}/></AreaChart></ResponsiveContainer></div><div className="panel"><h3>Recent admin alerts</h3>{["12 new service tickets","7 subsidy applications need review","3 payment refunds requested","18 products low in stock"].map(x=><div className="activity" key={x}><div className="activity-icon"><Bell size={16}/></div><div><b>{x}</b><span>Requires attention</span></div><ChevronRight/></div>)}</div></div></>
}

function Generic(){
  const location=useLocation();
  return <div className="panel empty-page"><div className="feature-icon"><Search/></div><h2>SolarConnect page</h2><p>This route is connected to the platform navigation and ready for a backend API integration.</p><Link className="btn primary" to="/dashboard">Back to dashboard</Link></div>
}

function App(){
  return <BrowserRouter><Layout><Routes>
    <Route path="/" element={<Landing/>}/><Route path="/login" element={<Auth/>}/><Route path="/signup" element={<Auth signup/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/><Route path="/buy-solar" element={<BuySolar/>}/><Route path="/services" element={<Services/>}/>
    <Route path="/loans" element={<Loans/>}/><Route path="/surplus" element={<Surplus/>}/><Route path="/calculator" element={<CalculatorPage/>}/>
    <Route path="/government-support" element={<Government/>}/><Route path="/marketplace/panels" element={<Marketplace category="Solar Panels"/>}/>
    <Route path="/marketplace/inverters" element={<Marketplace category="Inverters"/>}/><Route path="/marketplace/batteries" element={<Marketplace category="Batteries"/>}/>
    <Route path="/marketplace/lights" element={<Marketplace category="Solar Lights"/>}/><Route path="/marketplace/pumps" element={<Marketplace category="Solar Pumps"/>}/>
    <Route path="/marketplace/accessories" element={<Marketplace category="Cables & Accessories"/>}/><Route path="/orders" element={<Orders/>}/>
    <Route path="/solar-system" element={<SolarSystem/>}/><Route path="/wallet" element={<Wallet/>}/><Route path="/notifications" element={<Notifications/>}/>
    <Route path="/profile" element={<Profile/>}/><Route path="/credits" element={<Credits/>}/><Route path="/referrals" element={<Referrals/>}/>
    <Route path="/support" element={<Support/>}/><Route path="/admin" element={<Admin/>}/><Route path="*" element={<Generic/>}/>
  </Routes></Layout></BrowserRouter>
}
createRoot(document.getElementById("root")).render(<App/>);
