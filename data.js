// ==========================================
// DATA SOURCE: TKA BAHASA INGGRIS TL (TINGKAT LANJUT) - SMA 2026
// VERBATIM FIDELITY: 100% MATCH TO OFFICIAL SOURCE MODULE
// ==========================================

const TKA_DATA = {
  strategies: [
    {
      id: "topic_main_idea",
      name: "1. TOPIC / MAIN IDEA",
      type: "Topic / Main Idea",
      quickQuestion: "What is this text mostly about?",
      steps: [
        "Jangan langsung memilih jawaban berdasarkan satu kalimat.",
        "Perhatikan keseluruhan teks.",
        "Cari siapa atau apa yang paling banyak dibahas.",
        "Pilih jawaban yang mencakup keseluruhan isi teks.",
        "Hindari pilihan yang hanya mengambil satu detail kecil."
      ],
      formula: "Whole Text Scope + Core Subject = Topic / Main Idea"
    },
    {
      id: "detail_information",
      name: "2. DETAIL INFORMATION",
      type: "Detail Information",
      formula: "Question Keyword → Find Evidence → Verify Answer",
      steps: [
        "Baca keyword dalam pertanyaan.",
        "Cari keyword atau sinonimnya di teks.",
        "Baca satu sampai dua kalimat sebelum dan sesudah informasi tersebut.",
        "Jangan menggunakan asumsi pribadi.",
        "Pilih jawaban yang paling sesuai dengan bukti tekstual."
      ]
    },
    {
      id: "inference",
      name: "3. INFERENCE",
      type: "Inference",
      formula: "Text Evidence + Logical Thinking = Inference",
      steps: [
        "Cari fakta penting dalam teks.",
        "Hubungkan beberapa informasi.",
        "Pilih kesimpulan yang paling logis.",
        "Jangan memilih jawaban yang terlalu ekstrem.",
        "Pastikan kesimpulan masih didukung teks."
      ]
    },
    {
      id: "pronoun_reference",
      name: "4. PRONOUN REFERENCE",
      type: "Pronoun Reference",
      formula: "Pronoun → Previous Reference → Check Meaning",
      steps: [
        "Temukan pronoun.",
        "Lihat kalimat sebelumnya.",
        "Cari noun yang paling logis.",
        "Pastikan gender dan jumlahnya sesuai.",
        "Ganti pronoun dengan kandidat jawaban untuk mengecek makna."
      ]
    },
    {
      id: "vocabulary_in_context",
      name: "5. VOCABULARY IN CONTEXT",
      type: "Vocabulary in Context",
      formula: "Unknown Word → Context → Meaning",
      steps: [
        "Jangan langsung menerjemahkan kata secara terpisah.",
        "Baca kalimat lengkap.",
        "Perhatikan situasi.",
        "Cari sinonim atau petunjuk makna.",
        "Eliminasi pilihan yang merupakan antonim atau tidak relevan."
      ]
    },
    {
      id: "true_false",
      name: "6. TRUE / FALSE",
      type: "True / False",
      formula: "Statement → Evidence → True / False",
      steps: [
        "Cari bukti langsung dalam teks untuk setiap statement.",
        "Jangan menilai berdasarkan ingatan.",
        "Perhatikan kata pembatas ekstrem: always, only, immediately, never, all, entirely.",
        "Satu detail yang berbeda dapat membuat pernyataan False."
      ]
    },
    {
      id: "multi_select",
      name: "7. MULTIPLE-SELECT",
      type: "Multiple-Select",
      formula: "Each Statement → Check Evidence → Supported / Unsupported",
      steps: [
        "Jangan berhenti setelah menemukan satu jawaban benar.",
        "Periksa setiap statement satu per satu.",
        "Beri status: Supported atau Unsupported.",
        "Pilih semua jawaban yang didukung teks."
      ]
    },
    {
      id: "tone",
      name: "8. TONE",
      type: "Tone",
      quickQuestion: "How does the writer make the reader feel?",
      steps: [
        "Perhatikan Word choice (pilihan kata).",
        "Rasakan Atmosphere (suasana teks).",
        "Identifikasi Attitude penulis terhadap topik.",
        "Simpulkan Overall feeling (Reflective, Informative, Critical, dll.)."
      ]
    },
    {
      id: "purpose",
      name: "9. PURPOSE",
      type: "Purpose",
      quickQuestion: "Why was this text written?",
      steps: [
        "Perhatikan apakah tujuan teks: To persuade, To inform, To analyze, atau To discuss.",
        "Pilih yang paling sesuai dengan keseluruhan teks dan karakteristik genre teks."
      ]
    },
    {
      id: "conclusion",
      name: "10. CONCLUSION",
      type: "Conclusion",
      steps: [
        "Gabungkan informasi-informasi penting dari awal hingga akhir.",
        "Jangan hanya mengambil satu detail sepihak.",
        "Cari ide yang paling logis berdasarkan seluruh teks.",
        "Hindari informasi baru yang tidak disebutkan atau bertentangan."
      ]
    },
    {
      id: "categorization",
      name: "11. CATEGORIZATION",
      type: "Categorization",
      formula: "Keyword → Category → Evidence",
      steps: [
        "Identifikasi keyword pada setiap baris pernyataan.",
        "Cocokkan dengan kategori yang diminta (misal: Economic Impact vs Social Impact).",
        "Verifikasi bukti langsung di dalam paragraf.",
        "Jangan mengandalkan asumsi; periksa per baris secara teliti."
      ]
    }
  ],

  texts: [
    {
      id: 1,
      number: "Text 1",
      title: "Global Impact of Migration",
      questionRange: "Questions 16–20",
      sourceCitation: "(adapted from various sources)",
      paragraphs: [
        "Migration has long served as a catalyst for economic growth and social transformation. The International Organization for Migration (IOM) notes that migrants fill labor shortages, stimulate innovation, and balance demographic shifts. In many advanced economies, migration helps counter aging populations and declining birth rates. Consequently, the arrival of new workers and skills sustains productivity and ensures stability across industries such as healthcare and technology.",
        "Moreover, migration enriches societies culturally and socially. The United Nations emphasizes that migrants introduce traditions, languages, and perspectives which encourage dialogue and tolerance. This diversity strengthens social cohesion when communities adopt inclusive policies. Migrants also participate in civic life through volunteerism and community initiatives, thereby reinforcing the social fabric of host nations. Thus, migration is not only about labor mobility but also about building vibrant, multicultural societies.",
        "In addition, remittances highlight migration's global impact. The World Bank reports that migrants send hundreds of billions of dollars annually to their countries of origin, often exceeding official aid. These funds support education, healthcare, and small businesses, reducing poverty and stimulating local economies. As a result, migration generates a dual benefit: host nations gain workers and innovation, while origin countries receive financial support and knowledge transfer. This exchange fosters stronger economic ties and shared prosperity.",
        "To conclude, migration contributes to economic and social development by addressing labor needs, promoting cultural diversity, and sustaining financial flows worldwide. International evidence confirms that when migration is managed responsibly, both sending and receiving nations benefit. Therefore, migration should be regarded not as a burden but as an opportunity to build resilient economies and inclusive societies."
      ],
      vocabulary: [
        {
          word: "catalyst",
          pos: "noun",
          meaning: "pemicu / agen perubahan",
          context: "Migration has long served as a catalyst for economic growth and social transformation.",
          contextualMeaning: "Faktor atau pendorong utama yang mempercepat pertumbuhan ekonomi dan perubahan sosial.",
          pronunciation: "/ˈkætəlɪst/",
          example: "Technology served as a catalyst for rapid educational reform."
        },
        {
          word: "shortages",
          pos: "noun",
          meaning: "kekurangan / kelangkaan tenaga kerja",
          context: "...migrants fill labor shortages, stimulate innovation...",
          contextualMeaning: "Kondisi di mana jumlah pekerja lokal tidak mencukupi kebutuhan industri.",
          pronunciation: "/ˈʃɔːtɪdʒɪz/",
          example: "The hospital faced severe shortages of qualified nurses."
        },
        {
          word: "demographic",
          pos: "adjective",
          meaning: "kependudukan / demografi",
          context: "...and balance demographic shifts.",
          contextualMeaning: "Perubahan komposisi populasi seperti penuaan usia penduduk dan angka kelahiran.",
          pronunciation: "/ˌdeməˈɡræfɪk/",
          example: "Demographic changes affect government pension plans."
        },
        {
          word: "sustains",
          pos: "verb",
          meaning: "menopang / mempertahankan produktivitas",
          context: "...sustains productivity and ensures stability across industries...",
          contextualMeaning: "Menjaga kelangsungan dan stabilitas kinerja industri dari penurunan.",
          pronunciation: "/səˈsteɪnz/",
          example: "Proper nutrition sustains energy throughout the day."
        },
        {
          word: "enriches",
          pos: "verb",
          meaning: "memperkaya budaya dan sosial",
          context: "Moreover, migration enriches societies culturally and socially.",
          contextualMeaning: "Memberikan nilai tambah keberagaman tradisi dan wawasan baru bagi masyarakat.",
          pronunciation: "/ɪnˈrɪtʃɪz/",
          example: "Reading widely enriches a student's mind and vocabulary."
        },
        {
          word: "cohesion",
          pos: "noun",
          meaning: "kepaduan / kesatuan masyarakat",
          context: "This diversity strengthens social cohesion when communities adopt inclusive policies.",
          contextualMeaning: "Rasa persatuan dan keharmonisan hubungan antarsekelompok masyarakat.",
          pronunciation: "/kəʊˈhiːʒn/",
          example: "Community events encourage social cohesion among neighbors."
        },
        {
          word: "remittances",
          pos: "noun",
          meaning: "kiriman uang migran ke negara asal",
          context: "In addition, remittances highlight migration's global impact.",
          contextualMeaning: "Dana finansial yang dikirim pekerja migran ke keluarga mereka di negara asal.",
          pronunciation: "/rɪˈmɪtnsɪz/",
          example: "Remittances form a major portion of the developing nation's economy."
        },
        {
          word: "poverty",
          pos: "noun",
          meaning: "kemiskinan",
          context: "...reducing poverty and stimulating local economies.",
          contextualMeaning: "Kondisi kekurangan secara ekonomi yang berkurang berkat dana remitansi.",
          pronunciation: "/ˈpɒvəti/",
          example: "Education is essential for reducing poverty in rural areas."
        },
        {
          word: "prosperity",
          pos: "noun",
          meaning: "kemakmuran / kesejahteraan",
          context: "...fosters stronger economic ties and shared prosperity.",
          contextualMeaning: "Keadaan sukses, berkecukupanFinansial, dan sejahtera secara bersama.",
          pronunciation: "/prɒˈsperəti/",
          example: "Economic stability brings long-term prosperity to the nation."
        },
        {
          word: "resilient",
          pos: "adjective",
          meaning: "tangguh / ulet",
          context: "...an opportunity to build resilient economies and inclusive societies.",
          contextualMeaning: "Kemampuan perekonomian untuk tetap kuat dan bangkit dari berbagai krisis.",
          pronunciation: "/rɪˈzɪliənt/",
          example: "The small business proved resilient during the financial downturn."
        }
      ]
    },
    {
      id: 2,
      number: "Text 2",
      title: "Poetry & Emotional Intelligence",
      questionRange: "Questions 21–25",
      sourceCitation: "(adapted from various sources)",
      paragraphs: [
        "Poetry is not only an artistic form but also a medium that nurtures emotional intelligence. Emotional intelligence refers to the ability to recognize, understand, and manage emotions in oneself and others. Research published in Social Cognitive and Affective Neuroscience highlights that poetry, like music, activates neural circuits linked to emotional processing, showing its capacity to elicit strong feelings and reflection. Thus, engaging with poetry provides readers with opportunities to explore emotions deeply and develop empathy, self-awareness, and regulation.",
        "First, poetry fosters empathy by presenting diverse perspectives and emotional experiences. A survey study in the International Journal of Science, Engineering and Technology found that literature, including poetry, enhances empathic capacities among students and professionals by exposing them to varied human conditions. When readers encounter verses about joy, grief, or resilience, they imaginatively step into others' lives. This process builds compassion and tolerance, making poetry a bridge to understanding cultural diversity and interpersonal struggles.",
        "Second, poetry strengthens self-awareness and emotional regulation. The symbolic and condensed nature of poems encourages readers to pause and reflect on metaphors and imagery. Neuroscientific evidence suggests that such aesthetic experiences stimulate psychophysiological responses, helping individuals confront and articulate their own emotions. Writing or reading poetry also provides a safe outlet for intense feelings. Instead of suppressing emotions, individuals can channel them into creative language, reducing stress and promoting resilience.",
        "In conclusion, international studies confirm that poetry enhances emotional intelligence by cultivating empathy, encouraging self-awareness, and supporting emotional regulation. Its artistic qualities invite readers to engage with emotions in meaningful ways, making poetry not only a cultural treasure but also a valuable tool for personal development. Therefore, poetry should be embraced as a pathway to deeper emotional understanding and stronger human connections."
      ],
      vocabulary: [
        {
          word: "emotional intelligence",
          pos: "noun phrase",
          meaning: "kecerdasan emosional",
          context: "...also a medium that nurtures emotional intelligence.",
          contextualMeaning: "Kemampuan mengenali, memahami, dan mengelola emosi diri sendiri maupun orang lain.",
          pronunciation: "/ɪˈməʊʃənl ɪnˈtelɪdʒəns/",
          example: "Leaders with high emotional intelligence excel in conflict resolution."
        },
        {
          word: "neural circuits",
          pos: "noun phrase",
          meaning: "sirkuit saraf otak",
          context: "...activates neural circuits linked to emotional processing...",
          contextualMeaning: "Jaringan sel saraf otak yang bertanggung jawab mengolah perasaan dan refleksi.",
          pronunciation: "/ˈnjʊərəl ˈsɜːkɪts/",
          example: "Listening to music triggers neural circuits associated with pleasure."
        },
        {
          word: "elicit",
          pos: "verb",
          meaning: "memancing / membangkitkan (evoke)",
          context: "...showing its capacity to elicit strong feelings and reflection.",
          contextualMeaning: "Memunculkan atau memancing respons emosional dan perenungan mendalam.",
          pronunciation: "/ɪˈlɪsɪt/",
          example: "The speaker's passionate words elicited loud applause from the audience."
        },
        {
          word: "empathy",
          pos: "noun",
          meaning: "empati / kemampuan merasakan penderitaan orang lain",
          context: "...develop empathy, self-awareness, and regulation.",
          contextualMeaning: "Kemampuan secara imajinatif memahami perasaan dan kondisi kehidupan orang lain.",
          pronunciation: "/ˈempəθi/",
          example: "Reading novels helps young students develop deep empathy."
        },
        {
          word: "compassion",
          pos: "noun",
          meaning: "belas kasih / kepedulian tulus",
          context: "This process builds compassion and tolerance...",
          contextualMeaning: "Rasa empati mendalam yang mendorong toleransi dan rasa kepedulian antarmanusia.",
          pronunciation: "/kəmˈpæʃn/",
          example: "The doctor treated all patients with boundless compassion."
        },
        {
          word: "condensed",
          pos: "adjective",
          meaning: "padat / terpadatkan",
          context: "The symbolic and condensed nature of poems...",
          contextualMeaning: "Sifat puisi yang singkat namun padat akan makna, imajinasi, dan metafora.",
          pronunciation: "/kənˈdenst/",
          example: "Poetry conveys deep thoughts through condensed language."
        },
        {
          word: "psychophysiological",
          pos: "adjective",
          meaning: "psikofisiologis (jiwa & fisik)",
          context: "...stimulate psychophysiological responses...",
          contextualMeaning: "Reaksi fisik pada tubuh yang dipicu oleh pengalaman psikologis emosional.",
          pronunciation: "/ˌsaɪkəʊˌfɪziəˈlɒdʒɪkl/",
          example: "Stress causes various psychophysiological symptoms like rapid heart rate."
        },
        {
          word: "suppressing",
          pos: "verb",
          meaning: "menekan / menahan emosi",
          context: "Instead of suppressing emotions, individuals can channel them...",
          contextualMeaning: "Menahan atau memendam emosi intens secara negatif alih-alih menyalurkannya.",
          pronunciation: "/səˈpresɪŋ/",
          example: "Suppressing feelings for a long time can lead to anxiety."
        },
        {
          word: "resilience",
          pos: "noun",
          meaning: "ketahanan diri / daya tahan mental",
          context: "...reducing stress and promoting resilience.",
          contextualMeaning: "Kemampuan mental seseorang untuk pulih dan bangkit dari tekanan atau duka.",
          pronunciation: "/rɪˈzɪliəns/",
          example: "Mental resilience enables individuals to overcome life challenges."
        },
        {
          word: "pathway",
          pos: "noun",
          meaning: "jalur / jalan menuju sesuatu",
          context: "...embraced as a pathway to deeper emotional understanding...",
          contextualMeaning: "Sarana atau jalan utama untuk mencapai pemahaman emosional yang lebih dalam.",
          pronunciation: "/ˈpɑːθweɪ/",
          example: "Continuous learning is a clear pathway to personal growth."
        }
      ]
    }
  ],

  questions: [
    // ==========================================
    // TEXT 1: QUESTIONS 16 - 20 (MIGRATION)
    // ==========================================
    {
      id: 16,
      textId: 1,
      number: 16,
      type: "Detail Information",
      questionTypeKey: "detail_information",
      format: "multi_select",
      question: "Which of the following are economic contributions of migration mentioned in the text? Choose all that apply!",
      options: [
        { key: "1", text: "Increasing unemployment", isCorrect: false },
        { key: "2", text: "Filling labor shortages", isCorrect: true },
        { key: "3", text: "Stimulating innovation", isCorrect: true },
        { key: "4", text: "Sustaining productivity across industries", isCorrect: true },
        { key: "5", text: "Reducing healthcare access", isCorrect: false }
      ],
      officialExplanation: "Kontribusi ekonomi migrasi yang disebutkan secara eksplisit pada Paragraf 1 meliputi: mengisi kekurangan tenaga kerja (filling labor shortages), mendorong inovasi (stimulating innovation), serta menopang produktivitas di berbagai industri (sustaining productivity across industries).",
      textualEvidence: "Paragraf 1: "...migrants fill labor shortages, stimulate innovation, and balance demographic shifts... Consequently, the arrival of new workers and skills sustains productivity and ensures stability across industries..."",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "migrants fill labor shortages, stimulate innovation, and balance demographic shifts... Consequently, the arrival of new workers and skills sustains productivity and ensures stability across industries...",
      distractorAnalysis: [
        { option: "Increasing unemployment", analysis: "Salah — Bertentangan dengan teks. Teks justru menyebutkan migran mengisi kekurangan tenaga kerja (fill labor shortages)." },
        { option: "Reducing healthcare access", analysis: "Salah — Teks menyatakan migran mendukung stabilitas industri seperti kesehatan (healthcare), bukan menguranginya." }
      ]
    },
    {
      id: 17,
      textId: 1,
      number: 17,
      type: "Vocabulary in Context",
      questionTypeKey: "vocabulary_in_context",
      format: "multiple_choice",
      question: "The word "poverty" has an opposite meaning with ...",
      options: [
        { key: "A", text: "cohesion." },
        { key: "B", text: "diversity." },
        { key: "C", text: "burden." },
        { key: "D", text: "prosperity." },
        { key: "E", text: "obstacle." }
      ],
      officialAnswer: "D",
      officialAnswerText: "(D) prosperity.",
      officialExplanation: "Kata 'poverty' berarti kemiskinan. Lawan kata (antonim) yang paling tepat adalah 'prosperity' yang berarti kemakmuran atau kesejahteraan.",
      textualEvidence: "Paragraf 3: "...reducing poverty and stimulating local economies... fosters stronger economic ties and shared prosperity."",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "reducing poverty and stimulating local economies... fosters stronger economic ties and shared prosperity.",
      distractorAnalysis: [
        { option: "A", analysis: "Salah — cohesion berarti kepaduan/persatuan, bukan lawan kata kemiskinan." },
        { option: "B", analysis: "Salah — diversity berarti keberagaman." },
        { option: "C", analysis: "Salah — burden berarti beban, memiliki konotasi negatif serupa dengan kemiskinan, bukan lawan kata." },
        { option: "E", analysis: "Salah — obstacle berarti rintangan/hambatan." }
      ]
    },
    {
      id: 18,
      textId: 1,
      number: 18,
      type: "Categorization",
      questionTypeKey: "categorization",
      format: "categorization",
      question: "Categorize the statements into Economic Impact or Social Impact based on the text!",
      categories: ["Economic Impact", "Social Impact"],
      items: [
        {
          id: "item1",
          statement: "Migrants introduce traditions, languages, and perspectives that encourage tolerance.",
          correctCategory: "Social Impact"
        },
        {
          id: "item2",
          statement: "Migrants fill labor shortages and sustain productivity in industries like healthcare.",
          correctCategory: "Economic Impact"
        },
        {
          id: "item3",
          statement: "Remittances support education, healthcare, and small businesses in origin countries.",
          correctCategory: "Economic Impact"
        },
        {
          id: "item4",
          statement: "Migrants participate in civic life through volunteerism and community initiatives.",
          correctCategory: "Social Impact"
        },
        {
          id: "item5",
          statement: "International evidence confirms that when migration is managed responsibly, both sending and receiving nations benefit.",
          correctCategory: "Economic Impact"
        }
      ],
      officialExplanation: "Identifikasi kata kunci: jika terkait pasar tenaga kerja, produktivitas, atau keuangan/bisnis (remittances/business), dikategorikan ke Economic Impact. Jika berhubungan dengan toleransi, budaya, kesukarelawanan, atau tatanan masyarakat, dimasukkan ke Social Impact.",
      textualEvidence: "Pernyataan 1 (Paragraf 2): '...enriches societies culturally and socially... encourage dialogue and tolerance'. Pernyataan 2 (Paragraf 1): '...fill labor shortages... sustains productivity...'. Pernyataan 3 (Paragraf 3): '...remittances... small businesses, reducing poverty...'. Pernyataan 4 (Paragraf 2): '...participate in civic life through volunteerism...'. Pernyataan 5 (Paragraf 4): '...contributes to economic and social development...both sending and receiving nations benefit'.",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "enriches societies culturally and socially... fill labor shortages... remittances... volunteerism...",
      distractorAnalysis: []
    },
    {
      id: 19,
      textId: 1,
      number: 19,
      type: "Inference",
      questionTypeKey: "inference",
      format: "multiple_choice",
      question: "If migration were severely restricted in aging societies, what would most likely happen according to the text?",
      options: [
        { key: "A", text: "Labor shortages would worsen and productivity could decline." },
        { key: "B", text: "Tourism activities would increase rapidly." },
        { key: "C", text: "Farming practices would replace modern industries." },
        { key: "D", text: "Government taxation policies would disappear." },
        { key: "E", text: "Entertainment programs would dominate social life." }
      ],
      officialAnswer: "A",
      officialAnswerText: "(A) Labor shortages would worsen and productivity could decline.",
      officialExplanation: "Menggunakan penalaran logika sebab-akibat terbalik (cause and effect). Jika kehadiran migran mengatasi populasi menua dan menopang produktivitas, maka pembatasan migran secara ketat akan memperburuk kekurangan pekerja dan menurunkan produktivitas.",
      textualEvidence: "Paragraf 1: "In many advanced economies, migration helps counter aging populations and declining birth rates. Consequently, the arrival of new workers and skills sustains productivity and ensures stability..."",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "In many advanced economies, migration helps counter aging populations and declining birth rates. Consequently, the arrival of new workers and skills sustains productivity and ensures stability...",
      distractorAnalysis: [
        { option: "B", analysis: "Salah — Topik pariwisata (tourism) tidak pernah dibahas dalam teks terkait populasi menua." },
        { option: "C", analysis: "Salah — Topik pertanian (farming) tidak pernah dibahas dalam teks terkait populasi menua." },
        { option: "D", analysis: "Salah — Topik kebijakan pajak pemerintah tidak dibahas dalam konteks ini." },
        { option: "E", analysis: "Salah — Topik program hiburan tidak relevan dengan permasalahan populasi menua." }
      ]
    },
    {
      id: 20,
      textId: 1,
      number: 20,
      type: "Conclusion",
      questionTypeKey: "conclusion",
      format: "multiple_choice",
      question: "What conclusion can be drawn from the text?",
      options: [
        { key: "A", text: "Migration is described mainly as a factor in tourism and entertainment activities." },
        { key: "B", text: "Migration is presented as focusing only on farming and agricultural practices." },
        { key: "C", text: "Migration is explained as being designed to replace traditional education systems." },
        { key: "D", text: "Migration should be seen as an opportunity to build resilient economies and inclusive societies." },
        { key: "E", text: "Migration is portrayed primarily as a matter of government taxation and financial policies." }
      ],
      officialAnswer: "D",
      officialAnswerText: "(D) Migration should be seen as an opportunity to build resilient economies and inclusive societies.",
      officialExplanation: "Kesimpulan utama teks ditegaskan pada paragraf penutup (Paragraf 4) yang menyatakan bahwa migrasi harus dipandang bukan sebagai beban, melainkan sebagai peluang untuk membangun ekonomi yang tangguh dan masyarakat yang inklusif.",
      textualEvidence: "Paragraf 4: "Therefore, migration should be regarded not as a burden but as an opportunity to build resilient economies and inclusive societies."",
      evidenceParagraphIndex: 3,
      evidenceSnippet: "Therefore, migration should be regarded not as a burden but as an opportunity to build resilient economies and inclusive societies.",
      distractorAnalysis: [
        { option: "A", analysis: "Salah — Menarik fokus ke topik hiburan/pariwisata yang tidak relevan." },
        { option: "B", analysis: "Salah — Menarik fokus sempit ke bidang pertanian." },
        { option: "C", analysis: "Salah — Teks tidak menyatakan migrasi menggantikan sistem pendidikan tradisional." },
        { option: "E", analysis: "Salah — Teks tidak menggambarkan migrasi semata-mata sebagai urusan pajak pemerintah." }
      ]
    },

    // ==========================================
    // TEXT 2: QUESTIONS 21 - 25 (POETRY)
    // ==========================================
    {
      id: 21,
      textId: 2,
      number: 21,
      type: "Detail Information",
      questionTypeKey: "detail_information",
      format: "multiple_choice",
      question: "Which argument in the text is most strongly supported by scientific evidence?",
      options: [
        { key: "A", text: "Poetry activates neural circuits linked to emotional processing." },
        { key: "B", text: "Poetry reduces one's self-confidence in social interactions." },
        { key: "C", text: "Poetry informs readers about historical cultural stories." },
        { key: "D", text: "Poetry focuses only on imaginary activities without real impact." },
        { key: "E", text: "Poetry eliminates critical thinking practices in literature." }
      ],
      officialAnswer: "A",
      officialAnswerText: "(A) Poetry activates neural circuits linked to emotional processing.",
      officialExplanation: "Argumen yang didukung bukti ilmiah formal ditunjukkan pada sitasi riset dalam jurnal 'Social Cognitive and Affective Neuroscience' yang membuktikan puisi mengaktifkan sirkuit saraf otak yang terhubung dengan pemrosesan emosi.",
      textualEvidence: "Paragraf 1: "Research published in Social Cognitive and Affective Neuroscience highlights that poetry, like music, activates neural circuits linked to emotional processing..."",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "Research published in Social Cognitive and Affective Neuroscience highlights that poetry, like music, activates neural circuits linked to emotional processing...",
      distractorAnalysis: [
        { option: "B", analysis: "Salah — Bertentangan dengan teks. Teks menyatakan puisi mendukung regulasi emosi dan ketahanan diri." },
        { option: "C", analysis: "Salah — Bukan fokus argumen utama dan bukan hasil bukti ilmiah neurosains yang dikutip." },
        { option: "D", analysis: "Salah — Bertentangan dengan teks. Teks membuktikan puisi membawa dampak nyata psikofisiologis." },
        { option: "E", analysis: "Salah — Tidak relevan dan berlawanan dengan pesan teks." }
      ]
    },
    {
      id: 22,
      textId: 2,
      number: 22,
      type: "Detail Information",
      questionTypeKey: "detail_information",
      format: "multi_select",
      question: "Which statements reflect poetry's role in self-awareness and regulation?\nThere is more than one correct answer. Choose all that apply!",
      options: [
        { key: "1", text: "Encouraging reflection on metaphors and imagery", isCorrect: true },
        { key: "2", text: "Suppressing emotions to avoid stress", isCorrect: false },
        { key: "3", text: "Stimulating psychophysiological responses", isCorrect: true },
        { key: "4", text: "Providing a safe outlet for intense feelings", isCorrect: true },
        { key: "5", text: "Preventing all negative emotions permanently", isCorrect: false }
      ],
      officialExplanation: "Peran puisi dalam self-awareness dan emotional regulation pada Paragraf 3 secara eksplisit mencakup: mendorong refleksi metafora & imajinasi, menstimulasi respons psikofisiologis, dan menyediakan wadah aman (safe outlet) untuk menyalurkan perasaan yang kuat.",
      textualEvidence: "Paragraf 3: "...nature of poems encourages readers to pause and reflect on metaphors and imagery. Neuroscientific evidence suggests that such aesthetic experiences stimulate psychophysiological responses... provides a safe outlet for intense feelings."",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "nature of poems encourages readers to pause and reflect on metaphors and imagery. Neuroscientific evidence suggests that such aesthetic experiences stimulate psychophysiological responses... provides a safe outlet for intense feelings.",
      distractorAnalysis: [
        { option: "Suppressing emotions to avoid stress", analysis: "Salah — Teks secara eksplisit menyatakan 'Instead of suppressing emotions...' (bukan menekan emosi)." },
        { option: "Preventing all negative emotions permanently", analysis: "Salah — Terlalu ekstrem; teks berbicara tentang mengelola dan menyalurkan emosi, bukan melenyapkan seluruh emosi negatif secara permanen." }
      ]
    },
    {
      id: 23,
      textId: 2,
      number: 23,
      type: "Vocabulary in Context",
      questionTypeKey: "vocabulary_in_context",
      format: "multiple_choice",
      question: "The word "elicit" in the text is closest in meaning to ...",
      options: [
        { key: "A", text: "suppress." },
        { key: "B", text: "decline." },
        { key: "C", text: "reduce." },
        { key: "D", text: "block." },
        { key: "E", text: "evoke." }
      ],
      officialAnswer: "E",
      officialAnswerText: "(E) evoke.",
      officialExplanation: "Dalam konteks 'elicit strong feelings', kata 'elicit' berarti memancing, membangkitkan, atau memunculkan perasaan (to draw out / evoke). Opsi (E) evoke adalah sinonim terdekat.",
      textualEvidence: "Paragraf 1: "...showing its capacity to elicit strong feelings and reflection."",
      evidenceParagraphIndex: 0,
      evidenceSnippet: "showing its capacity to elicit strong feelings and reflection.",
      distractorAnalysis: [
        { option: "A", analysis: "Salah — suppress berarti menekan/menahan (lawan kata)." },
        { option: "B", analysis: "Salah — decline berarti menolak atau merosot." },
        { option: "C", analysis: "Salah — reduce berarti mengurangi." },
        { option: "D", analysis: "Salah — block berarti menghalangi/menghambat." }
      ]
    },
    {
      id: 24,
      textId: 2,
      number: 24,
      type: "Detail Information",
      questionTypeKey: "detail_information",
      format: "multiple_choice",
      question: "How does writing poetry help individuals regulate emotions?",
      options: [
        { key: "A", text: "By offering a safe outlet to express and transform emotions into creative language." },
        { key: "B", text: "By eliminating the need for formal education to analyze literature." },
        { key: "C", text: "By entertaining readers with fictional stories without deeper reflection or meaning." },
        { key: "D", text: "By implementeing curriculum related poetry writing." },
        { key: "E", text: "By focusing mainly on reading activities about literature." }
      ],
      officialAnswer: "A",
      officialAnswerText: "(A) By offering a safe outlet to express and transform emotions into creative language.",
      officialExplanation: "Paragraf 3 menyatakan bahwa menulis atau membaca puisi memberikan ruang aman (safe outlet) bagi emosi intens, di mana individu dapat menyalurkannya menjadi bahasa kreatif (channel them into creative language).",
      textualEvidence: "Paragraf 3: "Writing or reading poetry also provides a safe outlet for intense feelings. Instead of suppressing emotions, individuals can channel them into creative language, reducing stress and promoting resilience."",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "Writing or reading poetry also provides a safe outlet for intense feelings. Instead of suppressing emotions, individuals can channel them into creative language, reducing stress and promoting resilience.",
      distractorAnalysis: [
        { option: "B", analysis: "Salah — Tidak disebutkan dalam teks." },
        { option: "C", analysis: "Salah — Menulis puisi adalah refleksi mendalam, bukan sekadar hiburan tanpa makna." },
        { option: "D", analysis: "Salah — Teks tidak membahas implementasi kurikulum sekolah." },
        { option: "E", analysis: "Salah — Pertanyaan menanyakan proses writing (menulis), bukan membaca saja." }
      ]
    },
    {
      id: 25,
      textId: 2,
      number: 25,
      type: "Inference",
      questionTypeKey: "inference",
      format: "multiple_choice",
      question: "What can be inferred about poetry's symbolic nature?",
      options: [
        { key: "A", text: "It prevents readers from understanding emotions clearly." },
        { key: "B", text: "It encourages readers to reflect deeply on emotions and meanings." },
        { key: "C", text: "It makes poetry less effective than music in emotional expression." },
        { key: "D", text: "It limits readers' ability to connect with personal experiences." },
        { key: "E", text: "It focuses more on factual information than emotional experiences." }
      ],
      officialAnswer: "B",
      officialAnswerText: "(B) It encourages readers to reflect deeply on emotions and meanings.",
      officialExplanation: "Sifat simbolik dan padat dari puisi mendorong pembaca untuk berhenti sejenak dan merenungkan metafora serta imajinasi, yang membantu mereka mengenali dan mengekspresikan emosi secara mendalam.",
      textualEvidence: "Paragraf 3: "The symbolic and condensed nature of poems encourages readers to pause and reflect on metaphors and imagery... helping individuals confront and articulate their own emotions."",
      evidenceParagraphIndex: 2,
      evidenceSnippet: "The symbolic and condensed nature of poems encourages readers to pause and reflect on metaphors and imagery... helping individuals confront and articulate their own emotions.",
      distractorAnalysis: [
        { option: "A", analysis: "Salah — Bertentangan. Sifat simbolik justru membantu pembaca mengenali emosi." },
        { option: "C", analysis: "Salah — Paragraf 1 menyamakan puisi dengan musik ('poetry, like music'), bukan menyebutnya kurang efektif." },
        { option: "D", analysis: "Salah — Bertentangan. Simbolik justru memperluas refleksi pembaca." },
        { option: "E", analysis: "Salah — Puisi condong pada pengalaman emosional dan estetika, bukan sekadar fakta objektif." }
      ]
    }
  ]
};
