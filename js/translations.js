/**
 * HealthBite - Comprehensive Translation Database (EN, HI, MR)
 * Covers ALL pages and content across the entire website
 */

const translations = {
    en: {
        // ===== NAVIGATION & COMMON =====
        home: "Home",
        dashboard: "Dashboard",
        recipes: "Recipes",
        tracker: "Tracker",
        tips: "Tips",
        profile_title: "Profile",
        logout: "Logout",
        login: "Login",
        register_now: "Register Now",
        language: "Language",
        mode: "Mode",
        
        // ===== HOME PAGE =====
        welcome: "Eat Smart, Live Better",
        hero_sub: "Your ultimate companion for personalized nutrition and sustainable healthy habits. Experience the farm-to-table lifestyle today.",
        get_started: "Get Started",
        register: "Register Now",
        
        // Features Section
        ecosystemTitle: "HealthBite Ecosystem",
        ecosystemDesc: "Everything you need to master your nutrition in one sustainable platform.",
        personalizedTitle: "Personalized Logic",
        personalizedDesc: "Smart algorithms that adapt to your profile and health goals.",
        try_now: "Try Now",
        intuitiveTitle: "Intuitive Tracker",
        intuitiveDesc: "Logging your meals has never been this satisfying or detailed.",
        open_tracker: "Open Tracker",
        expertTitle: "Expert Wisdom",
        expertDesc: "Bite-sized health tips to keep you motivated and informed daily.",
        read_tips: "Read Tips",
        
        // Benefits Section
        greenLivingTitle: "The Art of Green Living",
        greenLivingDesc: "Healthy eating isn't just about calories; it's about the quality of life you build with every choice. Our platform bridges the gap between intention and action.",
        vitalityTitle: "Boosted Vitality",
        vitalityDesc: "Feel the difference in your energy levels.",
        choicesTitle: "Mindful Choices",
        choicesDesc: "Build a sustainable relationship with food.",
        goalTitle: "Goal Oriented",
        goalDesc: "Data-driven paths to your ideal self.",
        
        // ===== LOGIN PAGE =====
        welcomeBack: "Welcome Back",
        loginDesc: "Login to continue your healthy journey.",
        emailAddress: "Email Address",
        emailPlaceholder: "email@example.com",
        password: "Password",
        passwordPlaceholder: "••••••••",
        loginBtn: "Login",
        noAccount: "Don't have an account?",
        registerLink: "Register Now",
        
        // ===== REGISTER PAGE =====
        createAccount: "Create Account",
        registerDesc: "Start your personalized health journey today.",
        fullName: "Full Name",
        fullNamePlaceholder: "John Doe",
        emailRegister: "Email Address",
        emailRegisterPlaceholder: "john@example.com",
        passwordRegister: "Password",
        passwordRegisterPlaceholder: "At least 6 characters",
        createAccountBtn: "Create Account",
        haveAccount: "Already have an account?",
        loginLink: "Login",
        
        // ===== DASHBOARD PAGE =====
        helloUser: "Hello, Healthy Human!",
        dashboardSubtitle: "Your daily performance metrics and personalized insights are ready.",
        calorieTarget: "Calorie Target",
        currentGoal: "Current Goal",
        currentWeight: "Current Weight",
        healthyHabitRatio: "Healthy Habit Ratio",
        habitComparison: "Comparison of nutrient-dense vs other choices",
        healthy: "Healthy",
        others: "Others",
        smartTipOfDay: "Smart Tip of the Day",
        discoverMore: "Discover More",
        recommendedNextBite: "Recommended Next Bite",
        fullRecipe: "Full Recipe",
        
        // ===== RECIPES PAGE =====
        personalizedMenu: "Personalized Menu",
        basedOnGoal: "Based on your goal:",
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        snacks: "Snacks",
        getInstructions: "Get Instructions",
        
        // Recipe Names
        avocadoToast: "Avocado Power Toast",
        berryBowl: "Berry Oatmeal Bowl",
        greenBowl: "Green Detox Bowl",
        quinoaSalmon: "Quinoa Salmon Mix",
        steakStirFry: "Steak & Veggie Stir-fry",
        turkeyTacos: "Low-Carb Turkey Tacos",
        greekYogurt: "Greek Yogurt Parfait",
        appleAlmond: "Apple & Almond Butter",
        
        // Recipe Descriptions
        avocadoDesc: "Mashed avocado with poached egg on whole grain toast.",
        berryDesc: "Oats with almond milk, honey, and fresh berries.",
        greenDesc: "Kale, spinach, chickpeas with lemon-tahini dressing.",
        quinoaDesc: "Pan-seared salmon on fluffy quinoa with broccoli.",
        steakDesc: "Lean steak with carrots, broccoli, and snap peas.",
        turkeyDesc: "Ground turkey lettuce wraps with salsa and yogurt.",
        yogurtDesc: "Greek yogurt, granola, and strawberries with honey.",
        appleDesc: "Apple slices with natural almond butter and cinnamon.",
        
        // ===== TRACKER PAGE =====
        dailyIntakeTracker: "Daily Intake Tracker",
        trackerSubtitle: "Knowledge is power. Log your intake and watch your progress unfold.",
        logNewMeal: "Log New Meal",
        foodName: "Food Name",
        foodNameExample: "e.g. Scrambled Eggs",
        estimateCalories: "Estimate Calories",
        caloriesExample: "e.g. 250",
        addToLog: "Add to My Log",
        todayTotal: "Today's Total",
        yourProgress: "Your Progress",
        motivational: "Consistency is the bridge between goals and accomplishment.",
        streakFire: "You're on fire! 🔥 Keep that momentum going!",
        streakStart: "Great start! Every meal logged is a step toward your goal.",
        currentStreak: "Current Streak",
        bestStreak: "Best Streak",
        weeklyAvg: "Weekly Avg",
        activeDays: "Active Days",
        activityHeatmap: "Activity Heatmap",
        dailyCalorieFreq: "Daily calorie logging frequency",
        less: "Less",
        more: "More",
        
        // ===== TIPS PAGE =====
        dailyWisdom: "Daily Wisdom",
        tipsSubtitle: "Nourish your mind with these science-backed nutritional insights.",
        hydrationFirst: "Hydration First",
        hydrationDesc: "Thirst is often masked as hunger. Drink a tall glass of water 20 minutes before every meal to improve digestion and control portion sizes.",
        hydrationTip: "Add a slice of lemon for an electrolyte boost.",
        fiberFriend: "Fiber is Your Friend",
        fiberDesc: "Incorporate whole grains and legumes to feed your gut microbiome. High-fiber foods keep you feeling satiated for much longer periods.",
        fiberFact: "Adults need 25-30g of fiber daily.",
        mindfulChewing: "Mindful Chewing",
        mindfulDesc: "Your brain takes about 20 minutes to signal fullness. Eat slowly and enjoy every bite. This prevents overeating and aids nutrient absorption.",
        chewingGoal: "Chew each bite 20-30 times.",
        proTip: "Pro Tip:",
        fact: "Fact:",
        goal: "Goal:",
        
        // ===== PROFILE PAGE =====
        configureJourney: "Configure Your Journey",
        profileSubtitle: "Personalization is the secret to consistency. Define your health parameters.",
        changePhoto: "Change Photo",
        age: "Age",
        weight: "Weight (KG)",
        primaryGoal: "What's your primary goal?",
        weightLoss: "I want to lose weight",
        muscleGain: "I want to gain muscle",
        maintain: "I want to stay fit",
        dietaryPref: "Dietary Preference",
        vegetarian: "Vegetarian (Earth focused)",
        nonVegetarian: "Non-Vegetarian (Balanced)",
        saveProfile: "Save My Profile",
        profileUpdated: "Profile updated! Redirecting to dashboard...",
        
        // ===== GREETINGS =====
        hi: "Hi",
        hello: "Hello",
        
        // ===== STATS & MEASUREMENTS =====
        kcal: "kcal",
        kg: "kg",
        day: "Days",
        days: "Days",
        
        // ===== ACTION MESSAGES =====
        addedToTracker: "added to your Daily Tracker!",
        deletedFromLog: "Deleted from log",
        plateEmpty: "Your plate is empty!",
        logFirstMeal: "Log your first meal to start tracking.",
        gotIt: "Got it!",
        
        // ===== FOOTER =====
        copyright: "© 2024 HealthBite. Designed for Excellence.",
        allRightsReserved: "All rights reserved.",
        footerHome: "Home",
        footerDashboard: "Dashboard",
        footerTracker: "Tracker",
        footerContact: "Contact"
    },
    
    hi: {
        // ===== NAVIGATION & COMMON =====
        home: "होम",
        dashboard: "डैशबोर्ड",
        recipes: "रेसिपीज़",
        tracker: "ट्रैकर",
        tips: "टिप्स",
        profile_title: "प्रोफाइल",
        logout: "लॉगआउट",
        login: "लॉगिन",
        register_now: "अभी रजिस्टर करें",
        language: "भाषा",
        mode: "मोड",
        
        // ===== HOME PAGE =====
        welcome: "स्मार्ट खाएं, बेहतर जिएं",
        hero_sub: "व्यक्तिगत पोषण और टिकाऊ स्वस्थ आदतों के लिए आपका अंतिम साथी। आज ही फार्म-टू-टेबल जीवनशैली का अनुभव लें।",
        get_started: "शुरू करें",
        register: "अभी रजिस्टर करें",
        
        // Features Section
        ecosystemTitle: "हेल्थबाइट इकोसिस्टम",
        ecosystemDesc: "आपके पोषण को नियंत्रित करने के लिए एक टिकाऊ मंच पर सब कुछ।",
        personalizedTitle: "व्यक्तिगत तर्क",
        personalizedDesc: "स्मार्ट एल्गोरिदम जो आपकी प्रोफाइल और स्वास्थ्य लक्ष्यों के अनुकूल हैं।",
        try_now: "अभी आज़माएं",
        intuitiveTitle: "सहज ट्रैकर",
        intuitiveDesc: "अपने भोजन को लॉग करना कभी इतना संतोषजनक या विस्तृत नहीं रहा।",
        open_tracker: "ट्रैकर खोलें",
        expertTitle: "विशेषज्ञ ज्ञान",
        expertDesc: "आपको प्रेरित और सूचित रखने के लिए दैनिक स्वास्थ्य सुझाव।",
        read_tips: "टिप्स पढ़ें",
        
        // Benefits Section
        greenLivingTitle: "हरी जीवन शैली की कला",
        greenLivingDesc: "स्वस्थ खाना केवल कैलोरी के बारे में नहीं है; यह जीवन की गुणवत्ता के बारे में है जो आप हर चुनाव के साथ बनाते हैं।",
        vitalityTitle: "बढ़ी हुई जीवन शक्ति",
        vitalityDesc: "अपने ऊर्जा स्तर में अंतर महसूस करें।",
        choicesTitle: "सचेत विकल्प",
        choicesDesc: "भोजन के साथ एक टिकाऊ संबंध बनाएं।",
        goalTitle: "लक्ष्य उन्मुख",
        goalDesc: "अपने आदर्श आत्म के लिए डेटा-संचालित पथ।",
        
        // ===== LOGIN PAGE =====
        welcomeBack: "वापसी पर स्वागत है",
        loginDesc: "अपनी स्वस्थ यात्रा जारी रखने के लिए लॉगिन करें।",
        emailAddress: "ईमेल पता",
        emailPlaceholder: "email@example.com",
        password: "पासवर्ड",
        passwordPlaceholder: "••••••••",
        loginBtn: "लॉगिन",
        noAccount: "खाता नहीं है?",
        registerLink: "अभी रजिस्टर करें",
        
        // ===== REGISTER PAGE =====
        createAccount: "खाता बनाएं",
        registerDesc: "आज ही अपनी व्यक्तिगत स्वास्थ्य यात्रा शुरू करें।",
        fullName: "पूरा नाम",
        fullNamePlaceholder: "राज कुमार",
        emailRegister: "ईमेल पता",
        emailRegisterPlaceholder: "raj@example.com",
        passwordRegister: "पासवर्ड",
        passwordRegisterPlaceholder: "कम से कम 6 वर्ण",
        createAccountBtn: "खाता बनाएं",
        haveAccount: "पहले से खाता है?",
        loginLink: "लॉगिन",
        
        // ===== DASHBOARD PAGE =====
        helloUser: "नमस्ते, स्वस्थ इंसान!",
        dashboardSubtitle: "आपके दैनिक प्रदर्शन मेट्रिक्स और व्यक्तिगत अंतर्दृष्टि तैयार हैं।",
        calorieTarget: "कैलोरी लक्ष्य",
        currentGoal: "वर्तमान लक्ष्य",
        currentWeight: "वर्तमान वजन",
        healthyHabitRatio: "स्वस्थ आदत का अनुपात",
        habitComparison: "पोषक तत्वों वाले बनाम अन्य विकल्पों की तुलना",
        healthy: "स्वस्थ",
        others: "अन्य",
        smartTipOfDay: "आज का स्मार्ट सुझाव",
        discoverMore: "अधिक खोजें",
        recommendedNextBite: "अनुशंसित अगली चीज",
        fullRecipe: "पूरा व्यंजन",
        
        // ===== RECIPES PAGE =====
        personalizedMenu: "व्यक्तिगत मेनू",
        basedOnGoal: "आपके लक्ष्य के आधार पर:",
        breakfast: "नाश्ता",
        lunch: "दोपहर का भोजन",
        dinner: "रात का खाना",
        snacks: "स्नैक्स",
        getInstructions: "निर्देश प्राप्त करें",
        
        // Recipe Names
        avocadoToast: "एवोकाडो पावर टोस्ट",
        berryBowl: "बेरी ओटमील बाउल",
        greenBowl: "हरी डिटॉक्स बाउल",
        quinoaSalmon: "क्विनोआ सैल्मन मिक्स",
        steakStirFry: "स्टीक और सब्जी स्टर-फ्राई",
        turkeyTacos: "कम कार्ब टर्की टैकोस",
        greekYogurt: "ग्रीक दही पेराफिट",
        appleAlmond: "सेब और बादाम का मक्खन",
        
        // Recipe Descriptions
        avocadoDesc: "मैश किए हुए एवोकाडो के साथ पोच अंडा पूरे अनाज की रोटी पर।",
        berryDesc: "बादाम के दूध, शहद और ताजा जामुन के साथ ओट्स।",
        greenDesc: "काले, पालक, छोले नींबू तहिनी ड्रेसिंग के साथ।",
        quinoaDesc: "नरम क्विनोआ पर पैन-सीयर सैल्मन ब्रोकोली के साथ।",
        steakDesc: "गाजर, ब्रोकोली और स्नैप मटर के साथ दुबला स्टीक।",
        turkeyDesc: "सलसा और दही के साथ जमीन टर्की लेटिस रैप।",
        yogurtDesc: "शहद के साथ ग्रीक दही, ग्रेनोला और स्ट्रॉबेरी।",
        appleDesc: "दालचीनी और प्राकृतिक बादाम के मक्खन के साथ सेब के टुकड़े।",
        
        // ===== TRACKER PAGE =====
        dailyIntakeTracker: "दैनिक आहार ट्रैकर",
        trackerSubtitle: "ज्ञान ही शक्ति है। अपने आहार को लॉग करें और अपनी प्रगति को देखें।",
        logNewMeal: "नया भोजन लॉग करें",
        foodName: "भोजन का नाम",
        foodNameExample: "जैसे स्क्रैम्बल्ड एग्स",
        estimateCalories: "अनुमानित कैलोरी",
        caloriesExample: "जैसे 250",
        addToLog: "मेरे लॉग में जोड़ें",
        todayTotal: "आज का कुल",
        yourProgress: "आपकी प्रगति",
        motivational: "निरंतरता लक्ष्यों और उपलब्धि के बीच का पुल है।",
        streakFire: "आप आग पर हैं! 🔥 उस गति को जारी रखें!",
        streakStart: "शानदार शुरुआत! प्रत्येक भोजन लॉग आपके लक्ष्य की ओर एक कदम है।",
        currentStreak: "वर्तमान धारा",
        bestStreak: "सर्वोत्तम धारा",
        weeklyAvg: "साप्ताहिक औसत",
        activeDays: "सक्रिय दिन",
        activityHeatmap: "गतिविधि हीटमैप",
        dailyCalorieFreq: "दैनिक कैलोरी लॉगिंग आवृत्ति",
        less: "कम",
        more: "अधिक",
        
        // ===== TIPS PAGE =====
        dailyWisdom: "दैनिक ज्ञान",
        tipsSubtitle: "इन विज्ञान-समर्थित पोषण अंतर्दृष्टि से अपने मन को पोषित करें।",
        hydrationFirst: "पहले हाइड्रेशन",
        hydrationDesc: "प्यास अक्सर भूख के रूप में छिपी होती है। हर भोजन से 20 मिनट पहले पानी का एक बड़ा गिलास पिएं।",
        hydrationTip: "इलेक्ट्रोलाइट बूस्ट के लिए नींबू की एक स्लाइस जोड़ें।",
        fiberFriend: "फाइबर आपका दोस्त है",
        fiberDesc: "अपने आंत माइक्रोबायोम को खिलाने के लिए साबुत अनाज और दाल शामिल करें।",
        fiberFact: "वयस्कों को प्रतिदिन 25-30 ग्राम फाइबर की आवश्यकता है।",
        mindfulChewing: "सचेत चबाना",
        mindfulDesc: "आपके मस्तिष्क को पूर्णता का संकेत देने में लगभग 20 मिनट लगते हैं।",
        chewingGoal: "प्रत्येक कौर को 20-30 बार चबाएं।",
        proTip: "प्रो टिप:",
        fact: "तथ्य:",
        goal: "लक्ष्य:",
        
        // ===== PROFILE PAGE =====
        configureJourney: "अपनी यात्रा को कॉन्फ़िगर करें",
        profileSubtitle: "व्यक्तिगतकरण निरंतरता का रहस्य है। अपने स्वास्थ्य मापदंड परिभाषित करें।",
        changePhoto: "फोटो बदलें",
        age: "आयु",
        weight: "वजन (किलो)",
        primaryGoal: "आपका प्राथमिक लक्ष्य क्या है?",
        weightLoss: "मैं वजन कम करना चाहता हूं",
        muscleGain: "मैं मांसपेशियां बढ़ाना चाहता हूं",
        maintain: "मैं फिट रहना चाहता हूं",
        dietaryPref: "आहार संबंधी प्राथमिकता",
        vegetarian: "शाकाहारी (पृथ्वी केंद्रित)",
        nonVegetarian: "मांसाहारी (संतुलित)",
        saveProfile: "मेरी प्रोफाइल सहेजें",
        profileUpdated: "प्रोफाइल अपडेट हो गई! डैशबोर्ड पर रीडायरेक्ट किया जा रहा है...",
        
        // ===== GREETINGS =====
        hi: "नमस्ते",
        hello: "नमस्के",
        
        // ===== STATS & MEASUREMENTS =====
        kcal: "kcal",
        kg: "किलो",
        day: "दिन",
        days: "दिन",
        
        // ===== ACTION MESSAGES =====
        addedToTracker: "आपके दैनिक ट्रैकर में जोड़ा गया!",
        deletedFromLog: "लॉग से हटाया गया",
        plateEmpty: "आपकी प्लेट खाली है!",
        logFirstMeal: "ट्रैकिंग शुरू करने के लिए अपना पहला भोजन लॉग करें।",
        gotIt: "ठीक है!",
        
        // ===== FOOTER =====
        copyright: "© 2024 हेल्थबाइट। उत्कृष्टता के लिए डिज़ाइन किया गया।",
        allRightsReserved: "सर्वाधिकार सुरक्षित।",
        footerHome: "होम",
        footerDashboard: "डैशबोर्ड",
        footerTracker: "ट्रैकर",
        footerContact: "संपर्क"
    },
    
    mr: {
        // ===== NAVIGATION & COMMON =====
        home: "मुख्य पृष्ठ",
        dashboard: "डॅशबोर्ड",
        recipes: "रेसिपीज",
        tracker: "ट्रॅकर",
        tips: "टिप्स",
        profile_title: "प्रोफाइल",
        logout: "लॉगआउट",
        login: "लॉगिन",
        register_now: "आता नोंदणी करा",
        language: "भाषा",
        mode: "मोड",
        
        // ===== HOME PAGE =====
        welcome: "हुशारीने खा, चांगले जगा",
        hero_sub: "वैयक्तिकृत पोषण आणि शाश्वत निरोगी सवयींसाठी आपला अंतिम जोडीदार। आज ही फार्म-टू-टेबल जीवनशैली अनुभव करा।",
        get_started: "सुरू करा",
        register: "आता नोंदणी करा",
        
        // Features Section
        ecosystemTitle: "हेल्थबाइट इकोसिस्टम",
        ecosystemDesc: "तुमच्या पोषणासाठी सर्व काही एका टिकाऊ मंचावर।",
        personalizedTitle: "व्यक्तिगत तर्क",
        personalizedDesc: "स्मार्ट अल्गोरिदम जे तुमच्या प्रोफाइल आणि स्वास्थ्य लक्ष्यांशी जुळतात।",
        try_now: "आता वापरून पहा",
        intuitiveTitle: "सहज ट्रॅकर",
        intuitiveDesc: "तुमचे जेवण लॉग करणे कधीही इतके समाधानकारक किंवा तपशीलवार नव्हते।",
        open_tracker: "ट्रॅकर उघडा",
        expertTitle: "तज्ञ ज्ञान",
        expertDesc: "तुम्हाला प्रेरित आणि माहितीपूर्ण ठेवण्यासाठी दैनिक आरोग्य संकेत।",
        read_tips: "टिप्स वाचा",
        
        // Benefits Section
        greenLivingTitle: "हरित जीवनशैलीची कला",
        greenLivingDesc: "निरोगी खाणे केवळ कॅलरींबद्दल नाही; हे लाइफस्टाइलच्या गुणवत्तेबद्दल आहे।",
        vitalityTitle: "वर्धित ऊर्जा",
        vitalityDesc: "तुमच्या ऊर्जा पातळीतील फरक अनुभव करा।",
        choicesTitle: "सचेत निवड",
        choicesDesc: "जेवणाशी एक टिकाऊ संबंध तयार करा।",
        goalTitle: "लक्ष्य केंद्रित",
        goalDesc: "तुमच्या आदर्श आत्मांसाठी डेटा-चालित मार्ग।",
        
        // ===== LOGIN PAGE =====
        welcomeBack: "परत स्वागत आहे",
        loginDesc: "तुमची निरोगी प्रवासं सुरू ठेवण्यासाठी लॉगिन करा।",
        emailAddress: "ईमेल पता",
        emailPlaceholder: "email@example.com",
        password: "पासवर्ड",
        passwordPlaceholder: "••••••••",
        loginBtn: "लॉगिन",
        noAccount: "खाता नाही?",
        registerLink: "आता नोंदणी करा",
        
        // ===== REGISTER PAGE =====
        createAccount: "खाता तयार करा",
        registerDesc: "आज ही तुमची वैयक्तिकृत आरोग्य प्रवासं सुरू करा।",
        fullName: "संपूर्ण नाव",
        fullNamePlaceholder: "राज कुमार",
        emailRegister: "ईमेल पता",
        emailRegisterPlaceholder: "raj@example.com",
        passwordRegister: "पासवर्ड",
        passwordRegisterPlaceholder: "किमान 6 वर्ण",
        createAccountBtn: "खाता तयार करा",
        haveAccount: "आधीच खाता आहे?",
        loginLink: "लॉगिन",
        
        // ===== DASHBOARD PAGE =====
        helloUser: "नमस्कार, निरोगी मानव!",
        dashboardSubtitle: "तुमचे दैनिक कार्यक्षमता मेट्रिक्स आणि व्यक्तिगत अंतर्दृष्टी तयार आहेत।",
        calorieTarget: "कॅलरी लक्ष्य",
        currentGoal: "वर्तमान लक्ष्य",
        currentWeight: "वर्तमान वजन",
        healthyHabitRatio: "निरोगी सवयीचे प्रमाण",
        habitComparison: "पोषक घटक वनाम इतर पर्यायांची तुलना",
        healthy: "निरोगी",
        others: "इतर",
        smartTipOfDay: "आजचा स्मार्ट सुझाव",
        discoverMore: "अधिक शोधा",
        recommendedNextBite: "शिफारस केलेले अगले भोजन",
        fullRecipe: "संपूर्ण रेसिपी",
        
        // ===== RECIPES PAGE =====
        personalizedMenu: "वैयक्तिकृत मेनू",
        basedOnGoal: "तुमच्या लक्ष्यावर आधारित:",
        breakfast: "नाश्ता",
        lunch: "दोपारी जेवण",
        dinner: "रात्रीचे जेवण",
        snacks: "स्नॅक्स",
        getInstructions: "निर्देश मिळवा",
        
        // Recipe Names
        avocadoToast: "एव्होकाडो पॉवर टोस्ट",
        berryBowl: "बेरी ओटमील बाउल",
        greenBowl: "ग्रीन डिटॉक्स बाउल",
        quinoaSalmon: "क्विनोआ सॅल्मन मिक्स",
        steakStirFry: "स्टीक आणि भाज्य स्टीर-फ्राई",
        turkeyTacos: "कमी कार्ब टर्की टॅकोस",
        greekYogurt: "ग्रीक दही पेराफिट",
        appleAlmond: "सेब आणि बदाम मक्खन",
        
        // Recipe Descriptions
        avocadoDesc: "संपूर्ण अन्न टोस्टवर पोचड अंडेसह मॅश केलेल्या एव्होकाडो।",
        berryDesc: "बदाम दूध, महेंद्रफळ आणि ताज्या बेरीज सह ओटमील।",
        greenDesc: "काळी, पालक, छोले लिंबू-तहिनी ड्रेसिंगसह।",
        quinoaDesc: "मुलायम क्विनोआ आणि ब्रोकोली सह पॅन-सीयर सॅल्मन।",
        steakDesc: "गाजर, ब्रोकोली आणि स्नॅप बीन्स सह दुबला स्टीक।",
        turkeyDesc: "सॅल्सा आणि दही सह जमीन टर्की लेटिस रॅप।",
        yogurtDesc: "महेंद्रफळ सह ग्रीक दही, ग्रॅनोला आणि स्ट्रॉबेरी।",
        appleDesc: "दारचिनी आणि नैसर्गिक बदाम मक्खन सह सेब स्लाइस।",
        
        // ===== TRACKER PAGE =====
        dailyIntakeTracker: "दैनिक आहार ट्रॅकर",
        trackerSubtitle: "ज्ञान ही शक्ती आहे। तुमचे आहार लॉग करा आणि तुमची प्रगती पहा।",
        logNewMeal: "नवीन जेवण लॉग करा",
        foodName: "जेवणाचे नाव",
        foodNameExample: "उदा. स्क्रॅम्बल्ड अंडी",
        estimateCalories: "कॅलरीचा अंदाज",
        caloriesExample: "उदा. 250",
        addToLog: "माझ्या लॉगमध्ये जोडा",
        todayTotal: "आजचा एकूण",
        yourProgress: "तुमची प्रगती",
        motivational: "सातत्य हा लक्ष्य आणि कामगिरी यांच्यातिल पूल आहे।",
        streakFire: "तुम्ही आगीवर आहात! 🔥 ती गती चालू ठेवा!",
        streakStart: "शानदार सुरुवात! प्रत्येक जेवण लॉग केले आपल्या लक्ष्याकडे एक पाऊल आहे।",
        currentStreak: "वर्तमान मालिका",
        bestStreak: "सर्वोत्तम मालिका",
        weeklyAvg: "साप्ताहिक सरासरी",
        activeDays: "सक्रिय दिवस",
        activityHeatmap: "क्रियाकलाप हीटमॅप",
        dailyCalorieFreq: "दैनिक कॅलरी लॉगिंग वारंवारता",
        less: "कमी",
        more: "अधिक",
        
        // ===== TIPS PAGE =====
        dailyWisdom: "दैनिक शेतकरी",
        tipsSubtitle: "या विज्ञान-समर्थित पोषण अंतर्दृष्टीने आपल्या मनाचे पोषण करा।",
        hydrationFirst: "पहिले हायड्रेशन",
        hydrationDesc: "तहान अनेकदा भूक म्हणून लपलेली असते। प्रत्येक जेवणापूर्वी पाण्याचा एक मोठा ग्लास पिया।",
        hydrationTip: "इलेक्ट्रोलाइट बूस्टसाठी लिंबूचा एक स्लाइस जोडा।",
        fiberFriend: "फायबर तुमचा मित्र आहे",
        fiberDesc: "तुमच्या आंत मायक्रोबायोमला पोषण देण्यासाठी संपूर्ण धान्य आणि कडा समाविष्ट करा।",
        fiberFact: "प्रौढांना दैनिक 25-30 ग्रॅम फायबर आवश्यक आहे।",
        mindfulChewing: "सचेत चावणे",
        mindfulDesc: "तुमच्या मेंदूला पूर्णता सिग्नल देण्यास सुमारे 20 मिनिटे लागतात।",
        chewingGoal: "प्रत्येक कडेप्रत 20-30 वेळा चावा।",
        proTip: "प्रो टिप:",
        fact: "तथ्य:",
        goal: "लक्ष्य:",
        
        // ===== PROFILE PAGE =====
        configureJourney: "तुमची प्रवासं कॉन्फ़िगर करा",
        profileSubtitle: "वैयक्तिकरणच हा सातत्याचा रहस्य आहे। आपले आरोग्य मापदंड परिभाषित करा।",
        changePhoto: "फोटो बदला",
        age: "वय",
        weight: "वजन (किलो)",
        primaryGoal: "तुमचे प्राथमिक लक्ष्य काय आहे?",
        weightLoss: "मला वजन कमी करायचे आहे",
        muscleGain: "मला स्नायू वाढवायचे आहेत",
        maintain: "मला फिट राहायचे आहे",
        dietaryPref: "आहार प्राधान्य",
        vegetarian: "शाकाहारी (पृथ्वी-केंद्रित)",
        nonVegetarian: "मांसाहारी (संतुलित)",
        saveProfile: "माझी प्रोफाइल जतन करा",
        profileUpdated: "प्रोफाइल अपडेट झाली! डॅशबोर्डवर रीडायरेक्ट केले जात आहे...",
        
        // ===== GREETINGS =====
        hi: "नमस्कार",
        hello: "नमस्कार",
        
        // ===== STATS & MEASUREMENTS =====
        kcal: "kcal",
        kg: "किलो",
        day: "दिवस",
        days: "दिवस",
        
        // ===== ACTION MESSAGES =====
        addedToTracker: "तुमच्या दैनिक ट्रॅकरमध्ये जोडले!",
        deletedFromLog: "लॉगमधून हटविले",
        plateEmpty: "तुमची प्लेट रिकामी आहे!",
        logFirstMeal: "ट्रॅकिंग सुरू करण्यासाठी तुमचे पहिले जेवण लॉग करा।",        gotIt: "ठीक आहे!",        
        // ===== FOOTER =====
        copyright: "© 2024 हेल्थबाइट। उत्कृष्टतेसाठी डिজाइन केलेले।",
        allRightsReserved: "सर्व हक्क आरक्षित.",
        footerHome: "मुख्य पृष्ठ",
        footerDashboard: "डॅशबोर्ड",
        footerTracker: "ट्रॅकर",
        footerContact: "संपर्क"
    }
};

window.HealthBiteTranslations = translations;
