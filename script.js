// App Data
const topics = [
    { id: 'study', name: '学习压力', icon: 'fa-book-open-reader' },
    { id: 'game', name: '游戏沉迷', icon: 'fa-gamepad' },
    { id: 'life', name: '生活习惯', icon: 'fa-clock' },
    { id: 'social', name: '社交交友', icon: 'fa-user-group' }
];

const scenarios = {
    'study': [
        {
            seed: "Felix",
            child: "我不想上学了！太累了！每天都是作业，烦死了！",
            common: "你怎么这么懒？别人都能坚持，就你累？现在的苦是为了将来的甜！",
            common_tag: "说教 / 否定感受",
            eap: "妈妈看到你这么累，真的很心疼。这段时间确实压力太大了，想休息一下是正常的。我们抱一抱，好吗？",
            eap_tag: "共情 / 接纳 / 肢体安抚"
        },
        {
            seed: "Aneka",
            child: "这次考试又考砸了，我就是个笨蛋。",
            common: "早就跟你说了要多做题，你不听！现在知道后悔了吧？",
            common_tag: "指责 / 事后诸葛亮",
            eap: "看到这个分数你一定很难过吧。一次考试不能定义你。无论成绩如何，妈妈都爱你。我们等你心情好点再一起看看哪里可以调整。",
            eap_tag: "无条件的爱 / 共同面对"
        },
        {
            seed: "Bella",
            child: "老师讲课太无聊了，我根本听不进去。",
            common: "别找借口！老师讲课不好，那别的同学怎么能考好？还是你没用心！",
            common_tag: "比较 / 归因错误",
            eap: "听起来这门课让你感到很枯燥，确实很难集中注意力。能跟妈妈说说具体是哪部分让你觉得无聊吗？",
            eap_tag: "倾听 / 探索原因"
        },
        {
            seed: "Caleb",
            child: "我作业写不完了！太多了！我不写了！",
            common: "不写作业明天老师骂你别怪我！快点写！别磨蹭！",
            common_tag: "恐吓 / 催促",
            eap: "看着这么多作业确实让人头大。深呼吸，我们先喝杯水。你觉得先做哪一科会让你感觉轻松一点？",
            eap_tag: "情绪调节 / 拆解任务"
        },
        {
            seed: "Diana",
            child: "为什么我要学这些没用的东西？",
            common: "学生的天职就是学习！哪有那么多为什么！以后考不上大学你就去扫大街！",
            common_tag: "权威压制 / 灾难化",
            eap: "这是一个很好的问题。你觉得现在的学习内容和你想要的生活没有关系，是吗？我很想听听你对未来的想法。",
            eap_tag: "肯定提问 / 价值观探讨"
        }
    ],
    'game': [
        {
            seed: "Eli",
            child: "再玩一局！就一局！别烦我！",
            common: "一天到晚就知道玩！眼睛都要瞎了！把手机给我交出来！",
            common_tag: "命令 / 威胁",
            eap: "这局游戏对你很重要是吗？看来正打到关键时刻。我们约定好的时间到了，我等你打完这一局，然后我们去吃点水果，好吗？",
            eap_tag: "尊重 / 温和坚定"
        },
        {
            seed: "Fiona",
            child: "你们根本不理解游戏的乐趣，只知道控制我！",
            common: "我控制你是为你好！玩游戏能当饭吃吗？",
            common_tag: "反驳 / 功利导向",
            eap: "你觉得我们限制你玩游戏是因为不理解你，这让你很生气。其实妈妈也想了解，这个游戏最吸引你的地方是什么？",
            eap_tag: "好奇心 / 建立共同话题"
        },
        {
            seed: "George",
            child: "我的队友太坑了！气死我了！",
            common: "玩个游戏还生气？至于吗？不玩不就行了！",
            common_tag: "轻视 / 简单粗暴",
            eap: "听起来你对这局输得很不甘心，队友的配合让你很失望。这种挫败感确实很难受。",
            eap_tag: "共情挫败感"
        },
        {
            seed: "Hannah",
            child: "我不想吃饭，我要把这关过了！",
            common: "不吃拉倒！饿死你算了！",
            common_tag: "赌气 / 放弃沟通",
            eap: "这关一定很难攻克吧？妈妈把饭菜给你留着保温。等你攻克了这一关，记得来补充点能量，身体可是战斗的本钱。",
            eap_tag: "关怀 / 灵活变通"
        },
        {
            seed: "Ivan",
            child: "把手机还给我！那是我的隐私！",
            common: "你是我的孩子，我有什么不能看的？",
            common_tag: "侵犯边界 / 占有欲",
            eap: "对不起，妈妈刚才没经过你同意动了你的手机，让你感到被冒犯了。我向你道歉，以后我会尊重你的物品。",
            eap_tag: "道歉 / 尊重界限"
        }
    ],
    'life': [
        {
            seed: "Jack",
            child: "我的房间乱不乱关你什么事？别进我房间！",
            common: "我是你妈！这房子都是我买的！你住猪窝里舒服是吧？",
            common_tag: "权力压制 / 人身攻击",
            eap: "我明白了，你现在需要自己的独立空间，不希望被打扰。我尊重你的隐私。只是妈妈担心太乱会影响你心情，你自己决定什么时候整理，好吗？",
            eap_tag: "界限感 / 尊重隐私"
        },
        {
            seed: "Katie",
            child: "我不饿，我不吃早饭！",
            common: "不吃早饭怎么行？必须吃！对身体不好！",
            common_tag: "强迫 / 焦虑传递",
            eap: "看来你现在确实没胃口。那我给你带一盒牛奶和面包，等你饿的时候可以垫垫肚子。照顾好自己的胃哦。",
            eap_tag: "提供选择 / 关怀"
        },
        {
            seed: "Leo",
            child: "这件衣服太土了，我才不穿！",
            common: "这衣服多贵啊！你这孩子怎么这么不知好歹！",
            common_tag: "物质绑架 / 贴标签",
            eap: "看来这件衣服的风格不是你喜欢的。每个人都有自己的审美。下次买衣服我们一起去挑，选你喜欢的。",
            eap_tag: "尊重审美 / 合作方案"
        },
        {
            seed: "Mia",
            child: "我今晚要晚点睡，别催我！",
            common: "几点了还不睡？明天起不来别叫我！",
            common_tag: "威胁 / 撇清责任",
            eap: "你是想利用晚上的时间做点自己喜欢的事吧？只要不影响明天的状态，你自己安排时间。记得早点休息，晚安。",
            eap_tag: "信任 / 责任下放"
        },
        {
            seed: "Noah",
            child: "别总让我喝水！烦不烦！",
            common: "我这是关心你！你怎么不知好人心呢？",
            common_tag: "道德绑架 / 委屈",
            eap: "抱歉，妈妈提醒的次数太多让你觉得烦了。我知道你会照顾好自己的身体。水杯我放这儿了，渴了记得喝。",
            eap_tag: "自我反省 / 适度关怀"
        }
    ],
    'social': [
        {
            seed: "Olivia",
            child: "你们根本不懂我，只有我的朋友懂我！",
            common: "那些狐朋狗友能帮你什么？以后出社会还得靠父母！",
            common_tag: "贬低朋友 / 强调依赖",
            eap: "听到你这么说，妈妈有点失落，但也为你感到高兴，因为你找到了懂你的好朋友。朋友确实很重要。如果愿意的话，我也想多了解你的朋友们。",
            eap_tag: "接纳情绪 / 建立连接"
        },
        {
            seed: "Paul",
            child: "那个同学太讨厌了，我不想理他！",
            common: "同学之间要搞好关系，别总是看别人不顺眼，检讨一下你自己！",
            common_tag: "否定感受 / 归罪受害者",
            eap: "听起来他和你的相处让你很不舒服。能跟我说说发生了什么事吗？我们一起看看怎么应对这种情况。",
            eap_tag: "倾听 / 共同解决"
        },
        {
            seed: "Quinn",
            child: "我想去参加同学聚会，要很晚才回来。",
            common: "不行！太晚了不安全！全是借口，就是想出去疯！",
            common_tag: "武断拒绝 / 恶意揣测",
            eap: "你想去参加聚会，说明你很看重和同学的友谊。妈妈担心的是太晚回来的安全问题。如果你能保证在10点前到家，或者让我去接你，我就支持你去。",
            eap_tag: "表达担忧 / 协商规则"
        },
        {
            seed: "Ryan",
            child: "没人喜欢我，我觉得我很孤单。",
            common: "小小年纪哪来那么多愁善感？好好学习自然有人喜欢！",
            common_tag: "忽视情感 / 唯成绩论",
            eap: "听到你这么说，妈妈好想抱抱你。这种孤单的感觉一定很难受。在妈妈眼里，你是一个独一无二、值得被爱的孩子。",
            eap_tag: "情感支持 / 肯定价值"
        },
        {
            seed: "Sara",
            child: "他们都穿名牌鞋，我也想要一双。",
            common: "攀比什么？咱家没那个条件！",
            common_tag: "哭穷 / 否定需求",
            eap: "看到同学们都有，你也很想融入他们，是吗？这双鞋确实很酷。我们可以制定一个储蓄计划，或者作为你达成某个目标的奖励，你觉得呢？",
            eap_tag: "理解需求 / 延迟满足"
        }
    ]
};

// Helper to get avatar URL with expression
function getAvatarUrl(seed, emotion) {
    let params = '';
    if (emotion === 'angry') {
        params = '&mouth=grimace,scream&eyes=squint,angry';
    } else if (emotion === 'sad') {
        params = '&mouth=sad,concern&eyes=cry,sad';
    } else if (emotion === 'happy') {
        params = '&mouth=smile,twinkle&eyes=happy,wink';
    }
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}${params}`;
}

// State
let currentTopic = null;
let currentScenarioIndex = 0;

// Love Bank Data
const depositOptions = [
    // Positive Deposits (12 items)
    { id: 'hug', label: '给孩子一个拥抱', score: 5, type: 'positive' },
    { id: 'praise', label: '表扬一个具体优点', score: 5, type: 'positive' },
    { id: 'listen', label: '专注倾听5分钟 (不插嘴)', score: 10, type: 'positive' },
    { id: 'gift', label: '准备一份小惊喜 / 零食', score: 10, type: 'positive' },
    { id: 'cook', label: '做孩子爱吃的菜', score: 5, type: 'positive' },
    { id: 'love', label: '看着眼睛说 "我爱你"', score: 5, type: 'positive' },
    { id: 'privacy', label: '进房前敲门并等待', score: 5, type: 'positive' },
    { id: 'opinion', label: '询问孩子的意见 / 建议', score: 5, type: 'positive' },
    { id: 'apologize', label: '为自己的错误真诚道歉', score: 10, type: 'positive' },
    { id: 'activity', label: '一起看电影 / 运动 / 散步', score: 10, type: 'positive' },
    { id: 'hobby', label: '支持 / 赞赏孩子的兴趣', score: 10, type: 'positive' },
    { id: 'gentle', label: '情绪稳定地沟通 (无说教)', score: 5, type: 'positive' },

    // Negative Withdrawals (12 items)
    { id: 'sarcasm', label: '挖苦 / 讽刺孩子', score: -20, type: 'negative' },
    { id: 'cold', label: '冷暴力 (不理孩子)', score: -30, type: 'negative' },
    { id: 'hit', label: '打了孩子 / 肢体冲突', score: -50, type: 'negative' },
    { id: 'yell', label: '大吼大叫 / 情绪失控', score: -20, type: 'negative' },
    { id: 'compare', label: '拿 "别人家孩子" 做比较', score: -20, type: 'negative' },
    { id: 'interrupt', label: '打断孩子说话 / 不耐烦', score: -10, type: 'negative' },
    { id: 'deny', label: '否定感受 ("这有什么好哭的")', score: -10, type: 'negative' },
    { id: 'past', label: '翻旧账 / 数落过去', score: -20, type: 'negative' },
    { id: 'public', label: '当众批评 / 不给面子', score: -30, type: 'negative' },
    { id: 'spy', label: '偷看手机 / 日记 / 翻房间', score: -30, type: 'negative' },
    { id: 'threat', label: '威胁 (断绝关系 / 停零花钱)', score: -30, type: 'negative' },
    { id: 'nag', label: '唠叨个没完 / 重复说教', score: -10, type: 'negative' }
];

let loveBalance = 0;
let todayDeposits = new Set(); // Track selected IDs

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Event Listeners
    document.getElementById('btn-start').addEventListener('click', () => showView('view-topics'));

    // Bottom Nav
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const text = item.textContent.trim();
            if (text.includes('首页')) showView('view-welcome');
            if (text.includes('课程')) showView('view-topics');
            if (text.includes('心情')) showView('view-bank'); // Using "Mood" icon for Bank temporarily
        });
    });

    // Render Topics
    const grid = document.getElementById('topic-grid');
    grid.innerHTML = topics.map(topic => `
        <div class="topic-card" onclick="selectTopic('${topic.id}')">
            <div class="topic-icon"><i class="fa-solid ${topic.icon}"></i></div>
            <div class="topic-name">${topic.name}</div>
        </div>
    `).join('');

    // Render Love Bank
    renderLoveBank();
}

// Navigation
function showView(viewId) {
    document.querySelectorAll('.app-view').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('active');
    });

    const target = document.getElementById(viewId);
    target.classList.remove('hidden');
    setTimeout(() => target.classList.add('active'), 10);
}

// Logic
window.selectTopic = function (topicId) {
    currentTopic = topicId;
    currentScenarioIndex = 0;
    loadScenario();
    showView('view-scenario');
};

window.loadScenario = function () {
    const topicData = scenarios[currentTopic];
    if (!topicData || topicData.length === 0) return;

    if (currentScenarioIndex >= topicData.length) {
        currentScenarioIndex = 0;
    }

    const data = topicData[currentScenarioIndex];
    const topicName = topics.find(t => t.id === currentTopic).name;

    document.getElementById('scenario-category').textContent = topicName;
    document.getElementById('child-text').textContent = `"${data.child}"`;

    // Set initial avatar (Angry/Neutral)
    const avatarImg = document.querySelector('.child-avatar img');
    avatarImg.src = getAvatarUrl(data.seed, 'angry');

    // Reset UI
    document.getElementById('response-display').classList.add('hidden');
    document.getElementById('response-content-common').classList.add('hidden');
    document.getElementById('response-content-eap').classList.add('hidden');

    // Set Text
    document.getElementById('text-common').textContent = `"${data.common}"`;
    document.getElementById('tag-common').textContent = data.common_tag;

    document.getElementById('text-eap').textContent = `"${data.eap}"`;
    document.getElementById('tag-eap').textContent = data.eap_tag;
};

window.showResponse = function (type) {
    const display = document.getElementById('response-display');
    const contentCommon = document.getElementById('response-content-common');
    const contentEap = document.getElementById('response-content-eap');

    // Get current scenario data for seed
    const topicData = scenarios[currentTopic];
    const data = topicData[currentScenarioIndex];
    const avatarImg = document.querySelector('.child-avatar img');

    display.classList.remove('hidden');

    if (type === 'common') {
        contentCommon.classList.remove('hidden');
        contentEap.classList.add('hidden');
        avatarImg.src = getAvatarUrl(data.seed, 'sad'); // Sad
    } else {
        contentCommon.classList.add('hidden');
        contentEap.classList.remove('hidden');
        avatarImg.src = getAvatarUrl(data.seed, 'happy'); // Happy
    }
};

window.nextScenario = function () {
    currentScenarioIndex++;
    loadScenario();
};

function resetCard(cardId) {
    const card = document.getElementById(cardId);
    const content = card.querySelector('.card-content');
    content.classList.add('hidden');
    card.classList.remove('active');
}

// Love Bank Logic
function renderLoveBank() {
    const list = document.getElementById('deposit-list');
    list.innerHTML = depositOptions.map(opt => {
        const isSelected = todayDeposits.has(opt.id);
        const isNegative = opt.type === 'negative';
        const scoreDisplay = opt.score > 0 ? `+${opt.score}` : `${opt.score}`;

        return `
        <div class="deposit-item ${isSelected ? 'selected' : ''} ${isNegative ? 'negative' : ''}" onclick="toggleDeposit('${opt.id}', ${opt.score})">
            <div class="deposit-info">
                <div class="deposit-label">${opt.label}</div>
                <div class="deposit-score">${scoreDisplay} 分</div>
            </div>
            <div class="check-icon">
                <i class="fa-solid ${isNegative ? 'fa-xmark' : 'fa-check'}"></i>
            </div>
        </div>
        `;
    }).join('');

    document.getElementById('love-balance').textContent = loveBalance;
}

window.toggleDeposit = function (id, score) {
    if (todayDeposits.has(id)) {
        todayDeposits.delete(id);
        loveBalance -= score;
    } else {
        todayDeposits.add(id);
        loveBalance += score;
    }
    renderLoveBank();
};

window.addCustomDeposit = function () {
    const actionInput = document.getElementById('custom-action');
    const scoreInput = document.getElementById('custom-score');

    const action = actionInput.value.trim();
    const score = parseInt(scoreInput.value);

    if (action && score) {
        // Add to options dynamically
        const newId = 'custom_' + Date.now();
        depositOptions.push({ id: newId, label: action, score: score });

        // Auto-select it
        todayDeposits.add(newId);
        loveBalance += score;

        // Clear inputs
        actionInput.value = '';
        scoreInput.value = '';

        renderLoveBank();
    } else {
        alert('请输入具体行动和分数');
    }
};

window.toggleBankInfo = function () {
    const modal = document.getElementById('bank-info-modal');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
};

// Registration Logic
window.toggleRegistration = function () {
    const welcome = document.getElementById('welcome-content');
    const form = document.getElementById('registration-form');

    if (form.classList.contains('hidden')) {
        welcome.classList.add('hidden');
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
        welcome.classList.remove('hidden');
    }
};

window.handleRegister = function (e) {
    e.preventDefault();

    const name = document.getElementById('reg-name').value;
    const phone = document.getElementById('reg-phone').value;
    const email = document.getElementById('reg-email').value;
    const age = document.getElementById('reg-child-age').value;

    if (name && phone && email && age) {
        // Simulate API call / Save to local storage
        const user = { name, phone, email, childAge: age };
        localStorage.setItem('menopause_app_user', JSON.stringify(user));

        alert(`欢迎您，${name}！注册成功！`);

        // Reset form and go to topics
        e.target.reset();
        toggleRegistration(); // Go back to welcome (or directly to topics?)
        showView('view-topics'); // Direct to app
    }
};
