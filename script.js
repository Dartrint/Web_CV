/* ============================================
   Portfolio Script — Trần Thành Đạt
   ============================================ */

// ---- i18n ----
const translations = {
  vi: {
    navAbout: 'Về tôi',
    navProjects: 'Dự án',
    navJourney: 'Câu chuyện',
    navRecognition: "Dấu ấn",
    lightMode: "Light",
    lightNavAbout: "Về tôi",
    lightNavProjects: "Dự án",
    lightNavEducation: "Học vấn",
    lightKicker: "AI Engineer · Quantitative Researcher",
    lightHeroTitle: "Tôi biến những câu hỏi khó thành <em>hệ thống có ích.</em>",
    lightHeroLead: "Tôi kết hợp tư duy Toán – Tin, nền tảng AI và góc nhìn kinh doanh để đọc vấn đề từ nhiều phía, rồi xây lời giải đủ rõ ràng để người khác có thể sử dụng.",
    lightHeroCta: "Xem những gì tôi xây",
    lightDarkLink: "Xem bản tối",
    lightStoryLabel: "Cách tôi làm việc",
    lightStoryTitle: "Không bắt đầu từ công nghệ.<br><em>Bắt đầu từ con người.</em>",
    lightStoryBody: "Tôi thường bắt đầu ở nơi mọi thứ còn chưa rõ tên. Tôi lắng nghe bối cảnh, tìm cấu trúc bên dưới dữ liệu và đặt lại câu hỏi cho đúng trước khi nghĩ đến lời giải.",
    lightWorkLabel: "Những gì đã thành hình",
    lightWorkTitle: "Ý tưởng chỉ thật sự sống<br><em>khi có người dùng nó.</em>",
    lightWorkBody: "Một demo tương tác đang hoạt động, với số liệu thể hiện rõ phạm vi sản phẩm.",
    lightProject5: "Ứng dụng web tiếng Việt để tra cứu giá cổ phiếu, xem biểu đồ lịch sử và hỏi đáp kiến thức tài chính. Có thể dùng thử mà không cần đăng nhập.",
    lightDemo: "Mở demo tương tác ↗",
    lightGithub: "Xem GitHub ↗",
    project5Category: "AI / Tài chính",
    metricTickers: "mã cổ phiếu",
    metricRanges: "khung biểu đồ",
    metricMessages: "tin nhắn tối đa / phiên khách",
    lightEducationLabel: "Nền tảng phía sau",
    lightThemeDark: "Dark",
    lightContact: "Kết nối",
    lightQuestion: "“Điều gì đang thực sự cần được làm rõ?”",
    lightQuestionCaption: "Từ đó, câu chuyện bắt đầu.",
    lightPath1: "Hỏi đúng",
    lightPath1Detail: "Nhìn thấy điều đáng giải",
    lightPath2: "Nảy ý tưởng",
    lightPath2Detail: "Biến điều mơ hồ thành hướng đi",
    lightPath3: "Xây chắc",
    lightPath3Detail: "Để ý tưởng chạy được",
    lightPath4: "Thành hình",
    lightPath4Detail: "Đưa hệ thống đến gần người dùng",
    lightPath5: "Để lại dấu ấn",
    lightPath5Detail: "Để công nghệ chạm vào đời sống",
    lightEducationTitle: "Hai lăng kính.<br><em>Một cách nhìn rộng hơn.</em>",
    lightEducationBody: "Toán – Tin cho tôi cấu trúc. Quản trị Kinh doanh cho tôi bối cảnh. Cả hai cùng giúp tôi xây những sản phẩm AI không chỉ đúng về kỹ thuật mà còn có lý do để tồn tại.",
    lightGpaMath: "GPA Toán – Tin / 10.00",
    lightGpaBusiness: "GPA Quản trị Kinh doanh / 4.00",
    lightRank: "Toàn khóa · 3 học kỳ",
    lightExpBody: "Phân tích yêu cầu, làm rõ đặc tả và kết nối nhu cầu kinh doanh với giải pháp kỹ thuật.",
    lightDegreeMath: "Cử nhân Toán học & Khoa học máy tính",
    lightSchoolMath: "ĐH Khoa học Tự nhiên – ĐHQG TP.HCM · GPA 9.14 / 10.00",
    lightDegreeMathBody: "Nền tảng về toán học, cấu trúc dữ liệu, khai thác dữ liệu, Machine Learning và Deep Learning.",
    lightPresent: "hiện tại",
    lightDegreeBusiness: "Cử nhân Quản trị Kinh doanh",
    lightSchoolBusiness: "Đại học Kinh tế Quốc dân · GPA 3.55 / 4.00",
    lightDegreeBusinessBody: "Góc nhìn kinh doanh giúp tôi đặt công nghệ vào đúng bối cảnh và tạo ra giá trị thực.",
    lightCloseTitle: "Bạn đang đứng trước<br><em>câu hỏi nào?</em>",
    lightCloseCta: "Cùng bắt đầu một cuộc trao đổi ↗",
    lightFullCv: "Bản CV đầy đủ ↗",
    progressAbout: "Về tôi",
    progressProjects: "Những gì tôi xây",
    progressRecognition: "Điều còn lại",
    headerCta: "Kết nối",
    availability: "Sẵn sàng cho những bài toán AI đáng để giải",
    heroTitle: "Mỗi bài toán<br><em>bắt đầu từ một câu hỏi.</em>",
    heroDescription: "Tôi kết hợp tư duy toán học, nền tảng AI và góc nhìn kinh doanh để biến những câu hỏi còn bỏ ngỏ thành hệ thống có thể dùng được.",
    storyQuestion: 'Đặt câu hỏi',
    storyQuestionDetail: 'Nhìn thấy điều đáng giải',
    storyIdea: 'Nảy ý tưởng',
    storyIdeaDetail: 'Biến điều mơ hồ thành hướng đi',
    storyBuild: 'Xây dựng',
    storyBuildDetail: 'Để ý tưởng chạy được',
    storyProduct: 'Thành hình',
    storyProductDetail: 'Đưa hệ thống đến gần người dùng',
    storyImpact: 'Để lại dấu ấn',
    storyImpactDetail: 'Để công nghệ chạm vào đời sống',
    viewProjects: 'Xem dự án',
    viewMore: "Xem toàn bộ dự án",
    scroll: "Đi tiếp câu chuyện",
    aboutLabel: "Câu chuyện · Cách tôi nhìn và làm",
    aboutHeading: "Tôi không bắt đầu<br><span>từ công nghệ.</span>",
    aboutText1: "Tôi thường bắt đầu ở nơi mọi thứ còn chưa rõ tên. Tôi lắng nghe bối cảnh, tìm cấu trúc bên dưới dữ liệu và đặt lại câu hỏi cho đúng trước khi nghĩ đến lời giải.",
    aboutText2: "Từ đó, tôi dùng LLM, RAG và multi-agent để xây những hệ thống vừa đủ sâu để đáng tin, vừa đủ gần để người dùng muốn chạm vào.",
    statAgents: "Agent phối hợp để tạo một hành trình",
    statDimensions: "Tín hiệu được đọc từ một JD",
    statBba: 'Luồng xử lý trong trợ lý tài chính',
    statLlms: "Biến câu hỏi thành hướng giải quyết",
    educationLabel: "Học vấn & trải nghiệm",
    consultingOrg: 'VinaSoftware Co., Ltd. (VNS)',
    roleConsulting: 'Software Consulting Intern',
    consultingText: "Tôi hỗ trợ tư vấn website doanh nghiệp, landing page và hệ thống quản lý. Công việc bắt đầu từ việc nghe đúng nhu cầu, làm rõ yêu cầu rồi đưa chúng về một giải pháp kỹ thuật khả thi.",
    present: "HIỆN TẠI",
    degreeCs: 'Cử nhân Toán học & Khoa học máy tính',
    vnuhcm: 'ĐH Khoa học Tự nhiên – ĐHQG TP.HCM',
    vnuhcmText: "Nơi tôi đặt nền móng cho tư duy toán học và AI",
    vnuhcmCourse1: 'Cấu trúc dữ liệu & Giải thuật',
    vnuhcmCourse2: 'Cơ sở dữ liệu & Lập trình Web',
    vnuhcmCourse3: 'Khai thác dữ liệu và ứng dụng',
    vnuhcmCourse4: 'Machine Learning & Deep Learning',
    degreeBba: 'Cử nhân Quản trị Kinh doanh',
    neu: 'Đại học Kinh tế Quốc dân',
    neuText: "Kinh doanh dạy tôi nhìn xa hơn lời giải kỹ thuật: công nghệ cần tạo ra giá trị mà người dùng có thể cảm nhận.",
    neuCourse1: 'Toán cho các nhà kinh tế',
    neuCourse2: 'Thống kê trong kinh doanh',
    neuCourse3: 'Kinh tế vi mô & vĩ mô',
    neuCourse4: 'Quản trị kinh doanh',
    workLabel: "Chương 02 · Những thứ đã thành hình",
    projectHeading: "Những câu hỏi<br><span>đã thành hình.</span>",
    catQuant: 'Quantitative Research',
    discuss: "Trao đổi về dự án",
    project1: "Trợ lý y tế dùng LangGraph để điều phối bốn luồng: hỏi đáp tài liệu, triệu chứng, lập kế hoạch và trò chuyện. Có giọng nói TTS, bộ nhớ dài hạn, REST API và bộ đánh giá độ trễ, độ tin cậy.",
    project2: "Công cụ đọc JD và bóc tách hơn 9 nhóm yêu cầu bằng few-shot prompting. Hệ thống đối sánh CV, chuẩn bị câu hỏi phỏng vấn và soạn cover letter, hỗ trợ PDF, DOCX, TXT cùng báo cáo đa ngôn ngữ.",
    project3: "TripMate biến một yêu cầu tự nhiên thành lịch trình riêng cho từng người. Các agent phụ trách chuyến bay, khách sạn và hành trình; dữ liệu thời gian thực đến từ Groq, Tavily và AviationStack, còn PostgreSQL lưu lại trạng thái.",
    project4: "Bộ công cụ backtest Golden/Death Cross với engine vector hóa, chi phí giao dịch, walk-forward validation và sensitivity analysis. Từ OHLCV, hệ thống tạo tín hiệu rồi đo Sharpe, CAGR, Max Drawdown theo từng trạng thái thị trường.",
    project5: "Findata là ứng dụng web tiếng Việt với 3 chức năng: tra cứu giá cổ phiếu, xem biểu đồ lịch sử và hỏi đáp tài chính. Bảng giá gồm 15 mã; biểu đồ có 5 khung từ 1 tháng đến 5 năm. Khách dùng thử không cần đăng nhập.",
    project6: "Pipeline phát hiện bất thường trên dữ liệu cảm biến bán dẫn UCI SECOM. Dự án so sánh Isolation Forest, One-Class SVM và PyTorch Autoencoder, rồi dùng SHAP để chỉ ra yếu tố khiến một điểm dữ liệu trở nên khác thường.",
    viewMore: 'Xem thêm dự án',
    recognitionLabel: "Chương 03 · Những nền tảng phía sau",
    recognitionHeading: "Điều đứng sau<br>&amp; <span>những sản phẩm đó.</span>",
    awardLabel: 'Học bổng',
    academicLabel: 'Học thuật',
    award1: 'Mitsubishi UFJ Scholarship',
    award1sub: "Ghi nhận nỗ lực học tập và tiềm năng phát triển",
    award2: 'Talent Minds Agency Scholarship',
    award2sub: "Ghi nhận tinh thần học hỏi và định hướng nghề nghiệp",
    award3: 'Học bổng Khuyến khích Học tập Xuất sắc',
    award3sub: 'Top 5% toàn khóa · 3 học kỳ',
    awardsHeading: "Học bổng & thành tích",
    credentialsHeading: 'Chứng chỉ chuyên môn',
    credential1: 'Hypothesis Testing in Python',
    credential1Issuer: 'DataCamp',
    credential2: 'AI & Data Science Foundation',
    credential2Issuer: 'Quanskill',
    credential3: 'Data Streaming Engineer — Apache Flink®',
    credential3Issuer: 'Confluent, an IBM Company',
    credential4: 'Data Streaming Engineer Foundations',
    credential4Issuer: 'Confluent, an IBM Company',
    contactEyebrow: "Một câu hỏi hay luôn đáng để bắt đầu",
    contactHeading: "Nếu bạn cũng đang<br><em>đi tìm một lời giải.</em>",
    backToTop: "Về đầu trang ↑",
    journeyLabel: "Một hành trình được xây từ những câu hỏi",
    journeyTitle: "Từ một câu hỏi<br><em>đến điều có ích.</em>",
    journeyDescription: "Từ đặt câu hỏi, nảy ý tưởng, xây dựng đến khi sản phẩm thành hình và để lại một dấu ấn có thể nhìn thấy.",
    journeyCta: "Bắt đầu hành trình",
    journeyIntroLabel: "Điểm bắt đầu",
    journeyIntroTitle: "Tôi xây hệ thống<br><span>như kể một câu chuyện.</span>",
    journeyIntroText: "Mỗi dự án bắt đầu bằng một điểm mơ hồ. Tôi tách nó thành những phần có thể quan sát, xây từng lớp có chủ đích và chỉ gọi là hoàn thành khi người dùng hiểu được điều hệ thống đang làm.",
    journeyStep1Title: "Đặt câu hỏi",
    journeyStep1Body: "Không vội chọn mô hình. Tôi bắt đầu bằng việc lắng nghe bối cảnh, gọi đúng tên vấn đề và tìm tín hiệu đáng tin giữa rất nhiều dữ liệu.",
    journeyStep1Tech: "Quan sát · dữ liệu · tư duy định lượng",
    journeyStep2Title: "Nảy ý tưởng",
    journeyStep2Body: "Tôi biến điều còn mơ hồ thành một hướng đi có thể thử: một giả thuyết, một luồng trải nghiệm và một cách đo xem nó có đáng để tiếp tục hay không.",
    journeyStep2Tech: "Product thinking · research · prompt design",
    journeyStep3Title: "Xây dựng",
    journeyStep3Body: "Một ý tưởng tốt cần một cấu trúc tốt: luồng xử lý rõ ràng, bộ nhớ đúng chỗ, API có thể kiểm thử và những giới hạn được nói thẳng.",
    journeyStep3Tech: "Python · LangGraph · FastAPI · PostgreSQL",
    journeyStep4Title: "Sản phẩm thành hình",
    journeyStep4Body: "Khi các mảnh ghép kết nối, hệ thống bắt đầu trả lời được câu hỏi ban đầu. Tôi kiểm thử, tinh chỉnh và đưa nó đến gần hơn với một trải nghiệm thật.",
    journeyStep4Tech: "RAG · Multi-Agent · Streamlit · evaluation",
    journeyStep5Title: "Dấu ấn",
    journeyStep5Body: "Điều còn lại không chỉ là một demo. Đó là một sản phẩm có thể giải thích, một kết quả có thể kiểm chứng và một bài học để bước tiếp.",
    journeyStep5Tech: "GPA 9.14 · Top 5% · học bổng · 6 dự án",
    journeyLayersLabel: "Năm chặng của một lời giải",
    journeyLayersTitle: "Đi từng bước.<br><span>Thấy ý tưởng thành hình.</span>",
    journeyProofLabel: "Những lát cắt có thật",
    journeyProofTitle: "Ba hệ thống.<br><span>Ba cách biến câu hỏi thành hình hài.</span>",
    journeyProof1Title: "Khi dữ liệu cần một giọng nói",
    journeyProof1Body: "Healthcare AI Chatbot nối tri thức, triệu chứng và hội thoại trong một trợ lý có bộ nhớ dài hạn.",
    journeyProof2Title: "Khi một JD cần được đọc kỹ",
    journeyProof2Body: "JD Intelligence Agent biến mô tả tuyển dụng thô thành bản đồ yêu cầu, câu hỏi phỏng vấn và bước chuẩn bị cụ thể.",
    journeyProof3Title: "Khi một chuyến đi cần có nhịp riêng",
    journeyProof3Body: "TripMate phối hợp các agent để biến một câu yêu cầu tự nhiên thành lịch trình có thể dùng được.",
    journeyEndTitle: "Bạn đang đứng trước<br><em>câu hỏi nào?</em>",
    journeyEndLabel: "04 · CÂU HỎI TIẾP THEO",
    journeyEndText: "Nếu bài toán đủ thú vị, tôi muốn cùng bạn đi qua cả ba lớp: hiểu đúng, xây chắc và tạo ra điều có ích.",
  },
  en: {
    navAbout: 'About me',
    navProjects: 'Projects',
    navJourney: 'Story',
    navRecognition: "Highlights",
    lightMode: "Light",
    lightNavAbout: "About me",
    lightNavProjects: "Projects",
    lightNavEducation: "Education",
    lightKicker: "AI Engineer · Quantitative Researcher",
    lightHeroTitle: "I turn difficult questions into <em>useful systems.</em>",
    lightHeroLead: "I bring together mathematical thinking, AI foundations, and a business lens to read problems from more than one side, then build solutions people can use.",
    lightHeroCta: "See what I build",
    lightDarkLink: "View dark version",
    lightStoryLabel: "How I work",
    lightStoryTitle: "I do not begin with technology.<br><em>I begin with people.</em>",
    lightStoryBody: "I often begin where things do not yet have a clear name. I listen for context, look for the structure beneath the data, and reshape the question before reaching for an answer.",
    lightWorkLabel: "What took shape",
    lightWorkTitle: "An idea comes alive<br><em>when someone can use it.</em>",
    lightWorkBody: "A live interactive demo, with numbers that make its scope tangible.",
    lightProject5: "A Vietnamese-language web app for stock quotes, historical charts, and financial Q&A. Visitors can try it without signing in.",
    lightDemo: "Open interactive demo ↗",
    lightGithub: "View GitHub ↗",
    project5Category: "AI / Finance",
    metricTickers: "stock tickers",
    metricRanges: "chart ranges",
    metricMessages: "max messages / guest session",
    lightEducationLabel: "What stands behind the work",
    lightThemeDark: "Dark",
    lightContact: "Connect",
    lightQuestion: "“What truly needs to become clearer?”",
    lightQuestionCaption: "That is where the story begins.",
    lightPath1: "Ask well",
    lightPath1Detail: "See what is worth solving",
    lightPath2: "Shape the idea",
    lightPath2Detail: "Turn the unclear into direction",
    lightPath3: "Build deeply",
    lightPath3Detail: "Make the idea work",
    lightPath4: "Let it take shape",
    lightPath4Detail: "Bring the system closer to people",
    lightPath5: "Leave a mark",
    lightPath5Detail: "Let technology reach people",
    lightEducationTitle: "Two lenses.<br><em>A wider way of seeing.</em>",
    lightEducationBody: "Mathematics and Computer Science give me structure. Business Administration gives me context. Together, they help me build AI products that are technically sound and worth having.",
    lightGpaMath: "Mathematics & CS GPA / 10.00",
    lightGpaBusiness: "Business Administration GPA / 4.00",
    lightRank: "Top of cohort · 3 semesters",
    lightExpBody: "Analyzed requirements, clarified specifications, and connected business needs with workable technical solutions.",
    lightDegreeMath: "B.S. Mathematics & Computer Science",
    lightSchoolMath: "VNUHCM – University of Science · GPA 9.14 / 10.00",
    lightDegreeMathBody: "A foundation in mathematics, data structures, data mining, Machine Learning, and Deep Learning.",
    lightPresent: "present",
    lightDegreeBusiness: "Bachelor of Business Administration",
    lightSchoolBusiness: "National Economics University · GPA 3.55 / 4.00",
    lightDegreeBusinessBody: "The business lens helps me put technology in context and build toward real value.",
    lightCloseTitle: "What question<br><em>are you standing before?</em>",
    lightCloseCta: "Start a conversation ↗",
    lightFullCv: "Full CV ↗",
    progressAbout: "About me",
    progressProjects: "What I build",
    progressRecognition: "What remains",
    headerCta: "Connect",
    availability: "Open to AI Engineer & Quant Researcher opportunities",
    heroTitle: "Every problem<br><em>begins with a question.</em>",
    heroDescription: "I bring together mathematical thinking, AI foundations, and a business lens to turn open questions into systems people can use.",
    storyQuestion: 'Ask the question',
    storyQuestionDetail: 'See what is worth solving',
    storyIdea: 'Shape the idea',
    storyIdeaDetail: 'Turn the unclear into direction',
    storyBuild: 'Build the system',
    storyBuildDetail: 'Make the idea work',
    storyProduct: 'Let it take shape',
    storyProductDetail: 'Bring the system closer to people',
    storyImpact: 'Leave a mark',
    storyImpactDetail: 'Let technology reach people',
    viewProjects: 'View projects',
    viewMore: "Explore all projects",
    scroll: "Continue the story",
    aboutLabel: "Story · How I think and build",
    aboutHeading: "I do not begin<br><span>with technology.</span>",
    aboutText1: "I often begin where things do not yet have a clear name. I listen for context, look for the structure beneath the data, and reshape the question before reaching for an answer.",
    aboutText2: "From there, I use LLMs, RAG, and multi-agent systems to build work that is deep enough to trust and close enough for people to use.",
    statAgents: "Agents working together on one journey",
    statDimensions: "Signals read from one job description",
    statBba: 'Paths inside a financial assistant',
    statLlms: 'Turning questions into direction',
    educationLabel: 'Education & experience',
    consultingOrg: 'VinaSoftware Co., Ltd. (VNS)',
    roleConsulting: 'Software Consulting Intern',
    consultingText: "Supported software consulting for enterprise websites, landing pages, and business management systems. I analyzed requirements, clarified functional specifications, and connected business needs with technical solutions throughout the product lifecycle.",
    present: 'PRESENT',
    degreeCs: 'B.S. Mathematics & Computer Science',
    vnuhcm: 'VNUHCM – University of Science',
    vnuhcmText: "Where I built a strong foundation in mathematics and AI",
    vnuhcmCourse1: 'Data Structures & Algorithms',
    vnuhcmCourse2: 'Database Systems & Web Programming',
    vnuhcmCourse3: 'Data Mining & Applications',
    vnuhcmCourse4: 'Machine Learning & Deep Learning',
    degreeBba: 'Bachelor of Business Administration',
    neu: 'National Economics University',
    neuText: "The business perspective helps me put technology in context: creating real value, not simply completing a technical task.",
    neuCourse1: 'Mathematics for Economists',
    neuCourse2: 'Business Statistics',
    neuCourse3: 'Micro & Macroeconomics',
    neuCourse4: 'Business Administration',
    workLabel: "Chapter 02 · What took shape",
    projectHeading: "Questions that<br><span>became real systems.</span>",
    catQuant: 'Quantitative Research',
    discuss: "Let’s talk through it",
    project1: "A healthcare assistant using LangGraph StateGraph to coordinate RAG, symptom, planning, and chat flows. It combines voice TTS, long-term vector memory, REST APIs, and evaluation scripts for latency and reliability.",
    project2: "A pipeline that extracts more than nine requirement dimensions from raw job descriptions with few-shot prompting and schema-guided output. It supports CV matching, interview preparation, and cover-letter drafting in Streamlit with PDF/DOCX/TXT and multilingual reporting.",
    project3: "A travel planner that turns natural-language requests into personal itineraries through LangGraph. Specialized agents handle flights, hotels, and planning; Groq, Tavily, and AviationStack provide live information while PostgreSQL keeps the state.",
    project4: "A Golden/Death Cross backtesting framework with a vectorized engine, transaction-cost modeling, walk-forward validation, and sensitivity analysis. It turns OHLCV data into signals, Sharpe, CAGR, Max Drawdown, and a Streamlit dashboard by market regime.",
    project5: "Findata is a Vietnamese-language web app with 3 features: stock quotes, historical charts, and financial Q&A. It covers 15 tickers across 5 chart ranges (1 month to 5 years); guest sessions allow up to 200 messages.",
    project6: "An anomaly-detection pipeline for UCI SECOM semiconductor sensor data. The unsupervised approach is applicable to risk and fraud detection; it compares Isolation Forest, One-Class SVM, and a PyTorch Autoencoder, with SHAP explaining the result.",
    viewMore: 'View all projects',
    recognitionLabel: "Chapter 03 · What stands behind them",
    recognitionHeading: "What stands behind<br><span>the work.</span>",
    awardLabel: 'Scholarship',
    academicLabel: 'Academic',
    award1: 'Mitsubishi UFJ Scholarship',
    award1sub: "Recognized for academic effort and growth potential",
    award2: 'Talent Minds Agency Scholarship',
    award2sub: "Recognized for a strong learning mindset and career direction",
    award3: 'Excellent Academic Encouragement Scholarship',
    award3sub: 'Top 5% of cohort · 3 semesters',
    awardsHeading: "Scholarships & achievements",
    credentialsHeading: 'Professional certificates',
    credential1: 'Hypothesis Testing in Python',
    credential1Issuer: 'DataCamp',
    credential2: 'AI & Data Science Foundation',
    credential2Issuer: 'Quanskill',
    credential3: 'Data Streaming Engineer — Apache Flink®',
    credential3Issuer: 'Confluent, an IBM Company',
    credential4: 'Data Streaming Engineer Foundations',
    credential4Issuer: 'Confluent, an IBM Company',
    contactEyebrow: "A good question is always worth beginning",
    contactHeading: "If you are also<br><em>looking for an answer.</em>",
    backToTop: 'Back to top ↑',
    journeyLabel: "A journey built from questions",
    journeyTitle: "From one question<br><em>to something useful.</em>",
    journeyDescription: "From asking, imagining, and building to a product that takes shape and leaves a mark you can see.",
    journeyCta: "Begin the journey",
    journeyIntroLabel: "The starting point",
    journeyIntroTitle: "I build systems<br><span>like telling a story.</span>",
    journeyIntroText: "Every project begins with something unclear. I break it into observable parts, build each layer with intent, and call it done only when people understand what the system is doing.",
    journeyStep1Title: "Ask the question",
    journeyStep1Body: "I do not rush to choose a model. I begin with context, a precise problem, and a search for reliable signals in the noise.",
    journeyStep1Tech: "Observation · data · quantitative thinking",
    journeyStep2Title: "Shape the idea",
    journeyStep2Body: "I turn something unclear into a direction worth testing: a hypothesis, an experience flow, and a way to measure whether it deserves to continue.",
    journeyStep2Tech: "Product thinking · research · prompt design",
    journeyStep3Title: "Build the system",
    journeyStep3Body: "A good idea needs a good structure: clear flows, memory in the right place, testable APIs, and honest limits.",
    journeyStep3Tech: "Python · LangGraph · FastAPI · PostgreSQL",
    journeyStep4Title: "Let the product take shape",
    journeyStep4Body: "When the pieces connect, the system starts answering the original question. I test, refine, and bring it closer to a real experience.",
    journeyStep4Tech: "RAG · Multi-Agent · Streamlit · evaluation",
    journeyStep5Title: "Leave a mark",
    journeyStep5Body: "What remains is more than a demo: an explainable product, a verifiable result, and a lesson that points to the next step.",
    journeyStep5Tech: "GPA 9.14 · Top 5% · scholarships · 6 projects",
    journeyLayersLabel: "Five stages of an answer",
    journeyLayersTitle: "Take it step by step.<br><span>Watch the idea take shape.</span>",
    journeyProofLabel: "Proof in the work",
    journeyProofTitle: "Three systems.<br><span>Three ways to give a question form.</span>",
    journeyProof1Title: "When data needs a voice",
    journeyProof1Body: "Healthcare AI Chatbot brings knowledge, symptoms, and conversation together in an assistant with long-term memory.",
    journeyProof2Title: "When a job description needs reading",
    journeyProof2Body: "JD Intelligence Agent turns raw hiring text into a map of requirements, interview questions, and concrete preparation steps.",
    journeyProof3Title: "When a trip needs its own rhythm",
    journeyProof3Body: "TripMate coordinates specialized agents to turn a natural-language request into an itinerary people can actually use.",
    journeyEndTitle: "What question<br><em>are you standing before?</em>",
    journeyEndLabel: "04 · THE NEXT QUESTION",
    journeyEndText: "When the problem is interesting enough, I want to move through all three layers with you: understand, build, and make it useful.",
  },
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn, .light-lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('portfolio-lang', lang);
}

document.querySelectorAll('.lang-btn, .light-lang-btn').forEach((btn) =>
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang))
);
setLanguage(localStorage.getItem('portfolio-lang') || 'vi');

// ---- Cursor glow ----
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// ---- Navigation scroll state ----
const nav = document.getElementById('nav');
const onScroll = () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- Reading position ----
(function initStoryProgress() {
  const items = Array.from(document.querySelectorAll('.story-progress-item'));
  const sections = items
    .map((item) => document.getElementById(item.dataset.progressTarget))
    .filter(Boolean);
  if (!items.length || !sections.length) return;

  const setActive = (id) => {
    items.forEach((item) => item.classList.toggle('active', item.dataset.progressTarget === id));
  };

  const updateProgress = () => {
    const readingLine = window.scrollY + window.innerHeight * 0.3;
    let current = sections[0].id;
    sections.forEach((section) => {
      if (section.offsetTop <= readingLine) current = section.id;
    });
    setActive(current);
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
})();

// ---- Education timeline motion ----
(function initTimelineMotion() {
  const timeline = document.querySelector('.timeline');
  const items = Array.from(document.querySelectorAll('.timeline-item'));
  if (!timeline || !items.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    items.forEach((item) => item.classList.add('is-visible'));
    timeline.classList.add('reduced-motion');
  }

  const updateTimeline = () => {
    const readingLine = window.scrollY + window.innerHeight * 0.42;
    let currentIndex = 0;
    let progress = 0;

    items.forEach((item, index) => {
      const top = item.getBoundingClientRect().top + window.scrollY;
      const height = item.getBoundingClientRect().height;
      if (top <= readingLine) currentIndex = index;
      if (top <= readingLine || reducedMotion) item.classList.add('is-visible');
      if (top <= readingLine && top + height > readingLine) progress = top + height / 2;
    });

    items.forEach((item, index) => item.classList.toggle('is-current', index === currentIndex));
    const timelineTop = timeline.getBoundingClientRect().top + window.scrollY;
    const timelineHeight = timeline.getBoundingClientRect().height;
    const percent = Math.max(0, Math.min(100, ((progress || readingLine) - timelineTop) / timelineHeight * 100));
    timeline.style.setProperty('--timeline-progress', `${percent}%`);
  };

  window.addEventListener('scroll', updateTimeline, { passive: true });
  window.addEventListener('resize', updateTimeline, { passive: true });
  updateTimeline();
})();

// ---- Reveal on scroll ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---- Back to top ----
document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- Canvas background: mathematical grid + particles ----
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let W, H, particles, animId;
  const GRID = 60;
  const PARTICLE_COUNT = 55;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    };
  }

  function initParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  function drawGrid() {
    ctx.strokeStyle = 'rgba(0,212,170,0.035)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += GRID) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += GRID) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    // Accent dots at grid intersections (sparse)
    ctx.fillStyle = 'rgba(0,212,170,0.08)';
    for (let x = 0; x <= W; x += GRID * 3) {
      for (let y = 0; y <= H; y += GRID * 3) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawParticles() {
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,170,${p.alpha})`;
      ctx.fill();
    });
  }

  function drawConnections() {
    const MAX_DIST = 140;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.12;
          ctx.strokeStyle = `rgba(0,212,170,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function update() {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    });
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    if (!reduced) {
      drawConnections();
      drawParticles();
      update();
    } else {
      drawParticles();
    }
    animId = requestAnimationFrame(render);
  }

  resize();
  initParticles();
  render();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    initParticles();
    render();
  }, { passive: true });
})();

// ---- Journey layer interaction ----
(function initJourneyLayers() {
  const tabs = Array.from(document.querySelectorAll('.layer-tab'));
  const panels = Array.from(document.querySelectorAll('.layer-panel'));
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const layer = tab.dataset.layer;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        const active = panel.dataset.layerPanel === layer;
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      });
    });
  });
})();

// ---- Projects carousel ----
(function initCarousel() {
  const carousel = document.getElementById('projectsCarousel');
  const track = document.getElementById('projectsTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');
  const viewMoreBtn = document.getElementById('viewMoreBtn');

  if (!carousel || !track) return;

  const cards = Array.from(track.children);
  let currentIndex = 0;
  let autoPlayTimer = null;
  let isExpanded = false;
  const AUTO_INTERVAL = 3800;

  // ---- dots ----
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', String(i === 0));
    dot.setAttribute('aria-label', 'Dự án ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = () => dotsContainer.querySelectorAll('.carousel-dot');

  function getCardWidth() {
    const card = cards[0];
    if (!card) return 320;
    return card.getBoundingClientRect().width + 24; // width + gap
  }

  function updateTrack() {
    if (isExpanded) return;
    track.style.transform = `translateX(${-currentIndex * getCardWidth()}px)`;
    dots().forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
      d.setAttribute('aria-selected', String(i === currentIndex));
    });
  }

  function goTo(index) {
    currentIndex = ((index % cards.length) + cards.length) % cards.length;
    updateTrack();
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  function startAuto() {
    stopAuto();
    autoPlayTimer = setInterval(next, AUTO_INTERVAL);
  }

  function stopAuto() {
    clearInterval(autoPlayTimer);
  }

  prevBtn?.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  nextBtn?.addEventListener('click', () => { stopAuto(); next(); startAuto(); });

  // pause on hover
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', () => { if (!isExpanded) startAuto(); });

  // touch/swipe support
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
  }, { passive: true });

  // view more / collapse
  viewMoreBtn?.addEventListener('click', () => {
    isExpanded = !isExpanded;
    carousel.classList.toggle('expanded', isExpanded);
    viewMoreBtn.classList.toggle('active', isExpanded);

    const textEl = viewMoreBtn.querySelector('.view-more-text');
    if (textEl) {
      const lang = localStorage.getItem('portfolio-lang') || 'vi';
      textEl.textContent = isExpanded
        ? (lang === 'vi' ? 'Thu gọn' : 'Collapse')
        : (lang === 'vi' ? 'Xem thêm dự án' : 'View all projects');
    }

    if (isExpanded) {
      stopAuto();
      track.style.transform = '';
    } else {
      updateTrack();
      startAuto();
    }
  });

  // recalc on resize
  window.addEventListener('resize', () => { if (!isExpanded) updateTrack(); }, { passive: true });

  updateTrack();
  startAuto();
})();
