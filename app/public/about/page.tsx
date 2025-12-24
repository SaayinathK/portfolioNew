"use client";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"

  import { useEffect, useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import {
    Mail, Phone, MapPin, Download, Github, Linkedin, Facebook, Instagram,
    Code, Terminal, Cpu, Database, Server, Smartphone, Globe,
    Layers, GitBranch, GitCommit, GitPullRequest, Bug, Zap, Rocket,
    Cpu as CPU, Shield, Lock, Unlock, Wifi, WifiOff, Eye, EyeOff,
    Type, Bold, Italic, Underline, Hash, Plus, Minus, Divide, X as Multiply, X,
    CheckCircle, XCircle, AlertCircle, Info, ExternalLink, ChevronRight,
    ArrowRight, TrendingUp, Users, Award, Calendar, Clock, Sparkles,
    Coffee, Heart, Star, Target, Flag, Trophy, Medal, Crown, Brain,
    Microscope, Beaker, Atom, Code2, Brackets, Parentheses, Palette,
    Braces, Slash, Circle, Square, Triangle, Hexagon, Octagon,
    Play, Pause, FastForward, Rewind, SkipBack, SkipForward,
    Volume2, VolumeX, Mic, MicOff, Video, VideoOff, Camera,
    Image as ImageIcon, FileText, FileCode, FileJson, FileType,
    Folder, FolderOpen, HardDrive, Save, Upload, Download as DownloadIcon,
    Trash2, Edit, Copy, Scissors, RotateCcw, RotateCw,
    Maximize, Minimize, Grid, List, Menu, MoreHorizontal,
    Search, Filter, SortAsc, SortDesc, Layout, Sidebar,
    Settings, User, Bell, Inbox, Send, Mail as MailIcon,
    MessageSquare, MessageCircle, ThumbsUp, ThumbsDown,
    Heart as HeartIcon, Bookmark, Share, RefreshCw, RefreshCcw,
    Link as LinkIcon, Unlink, Key, Lock as LockIcon, Unlock as UnlockIcon,
    UserPlus, UserMinus, UserCheck, UserX, Users as UsersIcon,
    Tag, Hash as HashIcon, AtSign, DollarSign, Percent,
    PieChart, BarChart, LineChart, Activity, BarChart2,
    TrendingUp as TrendingUpIcon, TrendingDown, DownloadCloud,
    UploadCloud, Cloud, CloudRain, CloudSnow, CloudLightning,
    Sun, Moon, Sunset, Sunrise, Wind, Thermometer, Droplets,
    Umbrella, Mountain, Navigation, Compass, Map,
    Globe as GlobeIcon, Navigation2, MapPin as MapPinIcon,
    Car, Bike, Bus, Train, Plane, Ship, Truck, Navigation as NavigationIcon,
    Briefcase, Building, Home as HomeIcon, Hotel, Castle,
    Church, School, Factory, Store, ShoppingCart, Package,
    CreditCard, Wallet, Banknote, Coins, Bitcoin, DollarSign as DollarIcon,
    Euro, Currency, ShoppingBag, Tag as TagIcon,
    Percent as PercentIcon, Calculator, Divide as DivideIcon,
    Plus as PlusIcon, Minus as MinusIcon, X as XIcon,
    Equal,
    ChevronDown, ChevronLeft, ChevronRight as ChevronRightIcon,
    ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon,
    Move, RotateCw as Rotate, Scale, Crop, PenTool, Type as TypeIcon,
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon,
    Strikethrough, Highlighter, Pilcrow, Quote, Code as CodeIcon,
    Terminal as TerminalIcon, Command, Keyboard, Mouse,
    Headphones, Speaker, Tv, Monitor, Smartphone as SmartphoneIcon,
    Tablet, Watch, Camera as CameraIcon, Video as VideoIcon,
    Music, Headphones as HeadphonesIcon, Radio, Mic as MicIcon,
    Volume as VolumeIcon, Volume1, Volume2 as Volume2Icon,
    VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, FastForward as FastForwardIcon,
    Rewind as RewindIcon, SkipBack as SkipBackIcon,
    SkipForward as SkipForwardIcon, Repeat, Shuffle,
    Folder as FolderIcon, FolderPlus, FolderMinus, FolderOpen as FolderOpenIcon,
    File as FileIcon, FilePlus, FileMinus, FileText as FileTextIcon,
    FileCode as FileCodeIcon, FileImage, FileVideo, FileAudio,
    FileArchive, FileSpreadsheet, File as FileTypeIcon,
    Database as DatabaseIcon, Server as ServerIcon, HardDrive as HardDriveIcon,
    Cpu as CpuIcon, Cpu as ChipIcon, MemoryStick, Router, Wifi as WifiIcon,
    Bluetooth, RadioTower, Satellite, Signal, SignalHigh, SignalMedium,
    SignalLow, SignalZero, Battery, BatteryCharging, BatteryFull,
    BatteryMedium, BatteryLow, Power, Zap as ZapIcon,
    Sunrise as SunriseIcon, Sunset as SunsetIcon, Moon as MoonIcon,
    Star as StarIcon, Cloud as CloudIcon, CloudRain as CloudRainIcon,
    CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon,
    Umbrella as UmbrellaIcon, Wind as WindIcon, Thermometer as ThermometerIcon,
    Droplets as DropletsIcon, Flower, Leaf,
    Apple, Banana, Carrot, Coffee as CoffeeIcon, Wine,
    Beer, Pizza, Cake, Cookie, IceCream, Drumstick, Fish,
    Egg, Milk, Salad, Soup, Utensils,
    ChefHat, ShoppingCart as ShoppingCartIcon, Package as PackageIcon,
    Truck as TruckIcon, Ship as ShipIcon, Plane as PlaneIcon,
    Train as TrainIcon, Bus as BusIcon, Car as CarIcon, Bike as BikeIcon,
    Navigation as Navigation2Icon, Compass as CompassIcon, Wrench,
    Map as MapIcon, Globe2, Navigation2 as Navigation3Icon,
    MapPin as MapPin2Icon, Flag as FlagIcon, Target as TargetIcon,
    Award as AwardIcon, Trophy as TrophyIcon, Medal as MedalIcon,
    Crown as CrownIcon, Shield as ShieldIcon, Lock as Lock2Icon,
    Unlock as Unlock2Icon, Key as KeyIcon, Eye as EyeIcon,
    EyeOff as EyeOffIcon, User as UserIcon, Users as Users2Icon,
    UserPlus as UserPlusIcon, UserMinus as UserMinusIcon,
    UserCheck as UserCheckIcon, UserX as UserXIcon,
    Mail as Mail2Icon, Mailbox, Inbox as InboxIcon,
    Send as SendIcon, MessageSquare as MessageSquareIcon,
    MessageCircle as MessageCircleIcon, Bell as BellIcon,
    Home as Home2Icon, Building as BuildingIcon,
    Hotel as HotelIcon, Castle as CastleIcon, Church as ChurchIcon,
    School as SchoolIcon, Factory as FactoryIcon, Store as StoreIcon,
    CreditCard as CreditCardIcon,
    Wallet as WalletIcon, Banknote as BanknoteIcon, Coins as CoinsIcon,
    Bitcoin as BitcoinIcon, DollarSign as Dollar2Icon, Euro as EuroIcon,
    ShoppingBag as ShoppingBagIcon, Percent as Percent2Icon,
    Calculator as CalculatorIcon, Hash as Hash2Icon,
    AtSign as AtSignIcon, Asterisk, Infinity, Pi, Sigma,
    Omega,
    Check, X as X2Icon, HelpCircle, AlertTriangle,
    AlertOctagon, AlertCircle as AlertCircleIcon,
    Info as InfoIcon, CheckCircle as CheckCircleIcon,
    XCircle as XCircleIcon, Clock as ClockIcon,
    Calendar as CalendarIcon, Watch as WatchIcon,
    Timer, Hourglass, Moon as Moon2Icon,
    Cloud as Cloud2Icon, CloudRain as CloudRain2Icon,
    CloudSnow as CloudSnow2Icon, CloudLightning as CloudLightning2Icon,
    Wind as Wind2Icon, Thermometer as Thermometer2Icon,
    Droplets as Droplets2Icon,
    Flower as FlowerIcon, Leaf as LeafIcon,
    Coffee as Coffee2Icon, Wine as WineIcon, Beer as BeerIcon,
    Pizza as PizzaIcon, Cake as CakeIcon, Cookie as CookieIcon,
    IceCream as IceCreamIcon, Drumstick as DrumstickIcon,
    Fish as FishIcon, Egg as EggIcon, Milk as MilkIcon,
    Salad as SaladIcon,
    Soup as SoupIcon, Utensils as UtensilsIcon,
    ChefHat as ChefHatIcon, ShoppingCart as ShoppingCart2Icon,
    Package as Package2Icon, Truck as Truck2Icon,
    Ship as Ship2Icon, Plane as Plane2Icon, Train as Train2Icon,
    Bus as Bus2Icon, Car as Car2Icon, Bike as Bike2Icon,
    Navigation as Navigation4Icon, Compass as Compass2Icon,
    Map as Map2Icon, Globe as Globe2Icon, Navigation2 as Navigation5Icon,
    MapPin as MapPin3Icon
  } from "lucide-react";
  import { Graduate } from "next/font/google";

  interface About {
    title: string;
    shortBio: string;
    longBio: string;
    email: string;
    phone?: string;
    location?: string;
    resumeUrl?: string;
    profileImageUrl?: string;
    highlights?: string[];
    motto?: string;
  }

  async function getData<T = any>(url: string): Promise<T | null> {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) return null;
      return res.json();
    } catch {
      return null;
    }
  }

  // Coding icons for software engineering
  const codingIcons = [
    Code, Terminal, Cpu, Database, Server, Cloud, Smartphone, Globe,
    Layers, GitBranch, GitCommit, GitPullRequest, Bug, Zap, Rocket,
    Shield, Lock, Brackets, Parentheses, Braces,
    Code2, FileCode, FileJson, FileType, HardDrive, Command,
    Keyboard, Monitor, MemoryStick,
    Router, Bluetooth, Satellite, Signal, BatteryCharging, Power
  ] as const;

  const Typewriter = ({ text, delay, className }: { text: string; delay: number; className?: string }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, delay);

      return () => clearInterval(interval);
    }, [text, delay]);

    return <span className={className}>{displayedText}</span>;
  };

  const GraduationCap = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
    </svg>
  );


    const BriefcaseIcon = ({ size = 24, className = "" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="14" x2="12" y2="14.01" />
      </svg>
    );

  const SectionHeader = ({ title, subtitle, codeComment }: { title: string; subtitle: string; codeComment: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
      >
        <Code2 className="w-5 h-5 text-blue-400" />
        <span className="font-mono text-sm text-blue-400/90">{codeComment}</span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "96px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto mt-6 h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 rounded-full"
      />
    </motion.div>
  );

  export default function Home() {
    const [about, setAbout] = useState<About | null>(null);
    const [projects, setProjects] = useState<any[]>([]);
    const [achievements, setAchievements] = useState<any[]>([]);
    const [education, setEducation] = useState<any[]>([]);
    const [experience, setExperience] = useState<any[]>([]);
    const [gallery, setGallery] = useState<any[]>([]);
    const [skills, setSkills] = useState<any[]>([]);
    const [contacts, setContacts] = useState<any[]>([]);
    const [activeSection, setActiveSection] = useState("about");
    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
    const [floatingIcons, setFloatingIcons] = useState<Array<{
      x: number;
      y: number;
      iconIndex: number;
      size: number;
      speed: number;
      direction: number;
    }>>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedGalleryItem, setSelectedGalleryItem] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAlbumModalOpen, setIsAlbumModalOpen] = useState(false);
    const [selectedAlbumItem, setSelectedAlbumItem] = useState<any>(null);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    useEffect(() => {
      // Generate floating coding icons
      const icons = Array.from({ length: 20 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        iconIndex: Math.floor(Math.random() * codingIcons.length),
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() > 0.5 ? 1 : -1
      }));
      setFloatingIcons(icons);

      const loadData = async () => {
        try {
          const [
            aboutData,
            skillsData,
            projectsData,
            educationData,
            experienceData,
            achievementsData,
            galleryData,
            contactsData,
          ] = await Promise.all([
            getData<About>("/api/about"),
            getData<any[]>("/api/skills"),
            getData<any[]>("/api/projects"),
            getData<any[]>("/api/education"),
            getData<any[]>("/api/experience"),
            getData<any[]>("/api/achievements"),
            getData<any[]>("/api/gallery"),
            getData<any[]>("/api/contact"),
          ]);

          console.log("About data received:", aboutData);
          
          setAbout(aboutData);
          setSkills(skillsData ?? []);
          setProjects(projectsData ?? []);
          setEducation(educationData ?? []);
          setExperience(experienceData ?? []);
          setAchievements(achievementsData ?? []);
          setGallery(galleryData ?? []);
          setContacts(contactsData ?? []);
        } catch (error) {
          console.error("Error loading data:", error);
        }
      };

      loadData();
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        const sections = ["about", "skills", "projects", "education", "experience", "achievements", "gallery", "contact"];

        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(id);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Keyboard navigation for album modal
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!isAlbumModalOpen || !selectedAlbumItem) return;

        if (e.key === "Escape") {
          setIsAlbumModalOpen(false);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setCurrentImageIndex((prev) => (prev - 1 + (selectedAlbumItem.images?.length || 1)) % (selectedAlbumItem.images?.length || 1));
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setCurrentImageIndex((prev) => (prev + 1) % (selectedAlbumItem.images?.length || 1));
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isAlbumModalOpen, selectedAlbumItem, currentImageIndex]);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!name.trim() || !email.trim() || !message.trim()) {
        setError("Please fill in all fields.");
        return;
      }

      try {
        setSubmitting(true);

        await fetch("/api/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message, status: "new" }),
        });

        const subject = encodeURIComponent(`New message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:k.saayinath@gmail.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } catch (err) {
        console.error(err);
        setError("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    };

    const navLinks = [
      { id: "about", label: "About", icon: User },
      { id: "skills", label: "Skills", icon: Zap },
      { id: "projects", label: "Projects", icon: Code },
      { id: "education", label: "Education", icon: GraduationCap },
      { id: "experience", label: "Experience", icon: Briefcase },
      { id: "achievements", label: "Achievements", icon: Trophy },
      { id: "gallery", label: "Gallery", icon: ImageIcon },
      { id: "contact", label: "Contact", icon: Mail },  
    ];

    const resumeHref = about?.resumeUrl?.startsWith("data:") 
      ? about?.resumeUrl 
      : `data:application/pdf;base64,${about?.resumeUrl}`;

    return (
      <main className="min-h-screen bg-black text-foreground overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {floatingIcons.map((icon, i) => {
              const IconComponent = codingIcons[icon.iconIndex];
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: `${icon.x}vw`,
                    y: `${icon.y}vh`,
                    opacity: 0.03,
                    rotate: 0
                  }}
                  animate={{
                    x: [`${icon.x}vw`, `${icon.x + 10 * icon.direction}vw`],
                    y: [`${icon.y}vh`, `${icon.y + 5 * icon.direction}vh`],
                    rotate: 360,
                    opacity: [0.03, 0.06, 0.03]
                  }}
                  transition={{
                    x: {
                      duration: 20 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse"
                    },
                    y: {
                      duration: 15 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse"
                    },
                    rotate: {
                      duration: 40 + i * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    },
                    opacity: {
                      duration: 3 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse"
                    }
                  }}
                >
                  <IconComponent size={icon.size} className="text-gray-500/20" />
                </motion.div>
              );
            })}
          
          {/* Enhanced Gradient Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-gray-900/30 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gray-800/30 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.02, 0.04, 0.02]
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-900/20 rounded-full blur-3xl" 
          />
        </div>

        <div className="container mx-auto px-6 py-24 max-w-7xl relative z-10 space-y-40">
          {/* About Section - Hero Layout */}
          <motion.section id="about" className="scroll-mt-24 relative">
            {!about ? (
              <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                <div className="w-80 h-80 rounded-3xl bg-gray-800 animate-pulse" />
                <div className="space-y-4 flex-1">
                  <div className="h-12 w-3/4 bg-gray-700 rounded animate-pulse" />
                  <div className="h-8 w-1/2 bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ) : (
              <>
                {/* Animated Floating Code Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{
                        y: [null, window.innerHeight + 100],
                        opacity: [0, 0.8, 0],
                        x: Math.sin(i * 0.5) * 50
                      }}
                      transition={{
                        duration: 20 + Math.random() * 10,
                        delay: i * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }}
                      className="absolute text-xs text-green-400/30 font-mono whitespace-nowrap"
                      style={{ left: `${(i * 8) % 100}%` }}
                    >
                      {['<div>', 'const', 'function()', 'export', 'import', 'return', '=>', '{}', '[]', '();'][i % 10]}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
                  {/* Profile Image - clean layout */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="relative w-50 h-50 sm:w-100 sm:h-80 md:w-120 md:h-[50rem] lg:w-250 lg:h-[40rem] rounded-3xl overflow-hidden">
                      {about.profileImageUrl ? (
                        <Image
                          src={about.profileImageUrl}
                          alt="Profile"
                          className="w-full h-full object-cover"
                          width={400}
                          height={400}
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <User size={120} className="text-gray-400" />
                        </div>
                      )}
                    </div>

                    <div className="absolute -bottom-4 -right-4 bg-gray-900/90 text-white px-6 py-3 rounded-full text-sm font-semibold border border-gray-800">
                      <span className="animate-pulse">❤️</span> Available for opportunities
                    </div>
                  </motion.div>

                  {/* Info & CTA - Right Side with typing animation */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 space-y-6 relative"
                  >
                    {/* Name & Title with typewriter effect */}
                    <div className="relative">
                      <motion.p
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-600"
                      />
                      
                      <p className="text-sm text-gray-400 font-mono mb-2 flex items-center gap-2">
                        <span className="animate-pulse">▶ // about_me.js</span> 
                        <span className="text-green-400 text-xs ml-auto">running...</span>
                      </p>
                      
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                      >
                        Saayinath
                        <h2>Kanesamoorthy</h2>
                      </motion.h1>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="inline-block mb-4"
                      >
                        <p className="text-xl text-gray-400 font-mono bg-gray-900/50 px-4 py-3 rounded-lg border-l-4 border-gray-600">
                          <span className="text-gray-300">&lt;</span>
                          <Typewriter
                            text={about.title || "React Native / Flutter Developer"}
                            delay={50}
                            className="text-gray-200"
                          />
                          <span className="text-gray-300">/&gt;</span>
                          <span className="ml-2 animate-pulse">|</span>
                        </p>
                      </motion.div>
                      
                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-gray-400 text-sm leading-relaxed"
                      >
                        {about.shortBio}
                      </motion.div>
                    </div>

                    {/* Contact Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="space-y-3"
                    >
                      <div className="flex flex-wrap gap-3">
                        {about.location && (
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm text-gray-300 group cursor-pointer"
                          >
                            <MapPin size={18} />
                            <span>{about.location}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">📍</span>
                          </motion.div>
                        )}
                        
                        {about.phone && (
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            onClick={async (e) => {
                              e.stopPropagation();
                              await navigator.clipboard.writeText(about.phone || '');
                              setCopiedField && setCopiedField('aboutPhone');
                              setTimeout(() => setCopiedField && setCopiedField(null), 1200);
                            }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm text-gray-300 group cursor-pointer"
                          >
                            <Phone size={18} />
                            <span className="font-mono flex items-center gap-2">
                              {about.phone}
                              {copiedField === 'aboutPhone' && (
                                <span className="text-xs text-blue-300 ml-2 animate-pulse">Copied!</span>
                              )}
                            </span>
                            <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        )}
                        
                        {about.email && (
                          <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            onClick={async (e) => {
                              e.stopPropagation();
                              await navigator.clipboard.writeText(about.email);
                              setCopiedField && setCopiedField('aboutEmail');
                              setTimeout(() => setCopiedField && setCopiedField(null), 1200);
                            }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm text-gray-300 group cursor-pointer"
                          >
                            <Mail size={18} />
                            <span className="font-mono text-sm flex items-center gap-2">
                              {about.email}
                              {copiedField === 'aboutEmail' && (
                                <span className="text-xs text-cyan-300 ml-2 animate-pulse">Copied!</span>
                              )}
                            </span>
                            <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Social Media Icons */}
                      {contacts.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                          className="flex gap-3"
                        >
                          {contacts[0].linkedin && (
                            <motion.a
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              href={contacts[0].linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-lg border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                            >
                              <Linkedin size={20} />
                            </motion.a>
                          )}
                          
                          {contacts[0].github && (
                            <motion.a
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              href={contacts[0].github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-lg border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500/50 transition-all"
                            >
                              <Github size={20} />
                            </motion.a>
                          )}
                          
                          {contacts[0].instagram && (
                            <motion.a
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              href={contacts[0].instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-lg border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-pink-400 hover:border-pink-500/50 transition-all"
                            >
                              <Instagram size={20} />
                            </motion.a>
                          )}
                          
                          {contacts[0].facebook && (
                            <motion.a
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              href={contacts[0].facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-lg border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-blue-500 hover:border-blue-600/50 transition-all"
                            >
                              <Facebook size={20} />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </motion.div>

                    {/* CTA Buttons with enhanced effects - Responsive for mobile */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="flex flex-col md:flex-row gap-4 pt-6 flex-wrap w-full"
                    >
                      <motion.a
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="relative w-full md:w-auto px-8 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group overflow-hidden backdrop-blur-sm"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <Code2 size={18} />
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </motion.a>

                      {/* Attractive Resume Button - Responsive */}
                      <motion.a
                        whileHover={{ scale: 1.07, rotate: [0, -2, 2, 0] }}
                        whileTap={{ scale: 0.97 }}
                        href={about?.resumeUrl?.startsWith("data:") 
                          ? about.resumeUrl 
                          : `data:application/pdf;base64,${about?.resumeUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 text-white font-bold shadow-lg border-2 border-blue-500/30 hover:from-blue-500 hover:to-cyan-400 transition-all flex items-center justify-center gap-3 group overflow-hidden backdrop-blur-sm"
                        style={{ boxShadow: "0 4px 24px 0 rgba(34,211,238,0.15)" }}
                        aria-label="View Resume"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Download size={20} className="text-white drop-shadow" />
                        </motion.div>
                        <span className="relative z-10">View Resume</span>
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="relative w-full md:w-auto px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Download size={18} />
                        </motion.div>
                        Contact Me
                        <span className="ml-1 group-hover:scale-125 transition-transform">→</span>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </>
            )}
            
            {/* Bio & Skills Cards Below */}
            {about && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-24 space-y-12 relative"
              >
                {/* Animated binary rain background */}
                <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{
                        y: [null, 600],
                        opacity: [0, 0.4, 0]
                      }}
                      transition={{
                        duration: 10 + Math.random() * 10,
                        delay: i * 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }}
                      className="absolute text-xs text-gray-400/20 font-mono whitespace-nowrap"
                      style={{ left: `${(i * 5) % 100}%` }}
                    >
                      {Math.random() > 0.5 ? '1' : '0'}
                    </motion.div>
                  ))}
                </div>

                {/* Two-column layout: Left = Bio, Right = Motto + Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left: Bio Section with Interactive Code Editor */}
                  <div className="space-y-4">
                    <div className="bg-black border border-gray-800 rounded-2xl p-6 space-y-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <FileText size={20} className="text-gray-400" />
                          <span className="text-gray-300 font-mono">bio.ad</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {about.longBio.split(/[.!?]+/).filter(Boolean).length} lines | {(about.longBio.length / 500).toFixed(1)}KB
                        </div>
                      </div>

                      {about.longBio
                        .split(/[.!?]+/)
                        .filter(s => s.trim())
                        .map((line, index) => (
                          <motion.p
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-gray-300 pl-4 border-l-2 border-gray-600/50 hover:border-gray-600/90 transition-all group"
                          >
                            <span className="text-gray-500 mr-2 font-mono">{index + 1}</span>
                            {line.trim()}.
                            {/* ✓ */}
                            <span className="opacity-0 group-hover:opacity-100 text-gray-400 ml-2 transition-opacity">✓</span>
                          </motion.p>
                        ))}
                    </div>
                  </div>

                  {/* Right: Motto terminal + Skill cards stacked */}
                  <div className="space-y-8">
                    {/* Interactive Code Motto Terminal */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-black border border-gray-800 rounded-2xl p-6 font-mono text-sm backdrop-blur-sm overflow-hidden group"
                    >
                      {/* Terminal header */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500/70" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                          <div className="w-3 h-3 rounded-full bg-green-500/70" />
                        </div>
                        <span className="text-gray-400 text-xs">terminal — motto.js</span>
                        <div className="ml-auto flex items-center gap-2">
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            className="w-2 h-2 rounded-full bg-green-500"
                          />
                          <span className="text-green-400 text-xs">● LIVE</span>
                        </div>
                      </div>

                      {/* Typing animation for motto */}
                      <div className="space-y-2">
                        <p className="text-gray-500">$ node motto.js</p>

                        <div className="flex items-start gap-2">
                          <span className="text-green-400">▶</span>
                          <Typewriter
                            text={`const motto = "${about.motto || 'Code with purpose, design with passion'}";`}
                            delay={30}
                            className="text-gray-300"
                          />
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                            className="ml-1"
                          >
                            _
                          </motion.span>
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 2 }}
                          className="text-gray-200"
                        >
                          $ Output: Executing with passion and precision... 🚀
                        </motion.p>
                      </div>

                      {/* Animated cursor */}
                      <motion.div
                        animate={{
                          top: ["10%", "30%", "50%", "70%", "90%", "10%"],
                          left: ["10%", "80%", "40%", "20%", "60%", "10%"]
                        }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute w-6 h-6 rounded-full bg-gray-500/10 border border-gray-600/30 pointer-events-none"
                      />
                    </motion.div>

                    {/* Animated Skill Cards with Hover Effects */}
                    <div className="relative">
                      {/* Edge fades for nicer scroll affordance */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black via-black/70 to-transparent z-10" />

                      {/* Scroll arrows (fixed, not scrolling) */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const container = document.getElementById("highlights-scroll");
                          if (container) {
                            container.scrollBy({ left: -320, behavior: "smooth" });
                          }
                        }}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-sm hover:bg-white/20 opacity-100"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const container = document.getElementById("highlights-scroll");
                          if (container) {
                            container.scrollBy({ left: 320, behavior: "smooth" });
                          }
                        }}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-sm hover:bg-white/20 opacity-100"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        id="highlights-scroll"
                        className="group overflow-x-auto pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: "none" }}
                      >
                        <div className="flex gap-4 min-w-full whitespace-nowrap pr-6 snap-x snap-mandatory">
                          {(() => {
                            const defaultSkills = [
                              { icon: <Code2 size={32} />, title: "Full-Stack Development", color: "purple", emoji: "⚛️" },
                              { icon: <Palette size={32} />, title: "UI/UX Design", color: "pink", emoji: "🎨" },
                              { icon: <Brain size={32} />, title: "AI & Machine Learning", color: "cyan", emoji: "🤖" },
                              { icon: <Shield size={32} />, title: "Network Security", color: "green", emoji: "🔒" }
                            ];


                            const palette = {
                              icons: [
                                <Code2 size={32} key="code2" />, 
                                <Palette size={32} key="palette" />, 
                                <Brain size={32} key="brain" />, 
                                <Shield size={32} key="shield" />
                              ],
                              colors: ["purple", "pink", "cyan", "green"],
                              emojis: ["⚛️", "🎨", "🤖", "🔒"],
                            };

                            const highlightSkills = (about?.highlights || [])
                              .filter((h) => h && h.trim())
                              .map((title, index) => ({
                                icon: palette.icons[index % palette.icons.length],
                                title: title.trim(),
                                color: palette.colors[index % palette.colors.length],
                                emoji: palette.emojis[index % palette.emojis.length],
                                key: `highlight-skill-${index}`
                              }));

                            const skillsToShow = highlightSkills.length > 0 ? highlightSkills : defaultSkills;

                            return skillsToShow.map((skill, index) => (
                              <motion.div
                                key={skill.title + index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                  y: -10,
                                  scale: 1.05,
                                  transition: { type: "spring", stiffness: 300 }
                                }}
                                className="relative p-6 rounded-2xl border border-gray-800 bg-black backdrop-blur-sm group overflow-hidden cursor-pointer min-w-[260px] snap-start"
                              >
                                {/* Animated gradient border */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-gray-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Hover shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                                <div className="relative">
                                  <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                                    className={`text-${skill.color}-400 mb-4 inline-block`}
                                  >
                                    {skill.icon}
                                  </motion.div>
                                  
                                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                    {skill.title}
                                    <motion.span
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                                      className="text-lg"
                                    >
                                      {skill.emoji}
                                    </motion.span>
                                  </h4>
                                  
                                  <div className="flex items-center gap-2">
                                    <div className={`h-1 flex-1 bg-${skill.color}-500/20 rounded-full overflow-hidden`}>
                                      <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: `${70 + index * 10}%` }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-300`}
                                      />
                                    </div>
                                    <span className={`text-xs text-${skill.color}-400 font-mono`}>
                                      {70 + index * 10}%
                                    </span>
                                  </div>
                                </div>
                                
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileHover={{ opacity: 1 }}
                                  className="absolute -bottom-2 -right-2 text-4xl opacity-20"
                                >
                                  {skill.emoji}
                                </motion.div>
                              </motion.div>
                              ));
                            })()}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
            )}
          </motion.section>

          {/* End of About Section */}

          {/* Add more sections here as needed */}
          {/* Example: Skills, Projects, Education, Experience, Achievements, Gallery, Contact */}

          {/* Section Header Example */}
          {/* <SectionHeader
            title="Projects"
            subtitle="Some of my best work"
            codeComment="// projects.js"
          /> */}

          {/* You can continue with your other sections below, e.g., Skills, Projects, etc. */}
        </div>

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </main>
    );
  }