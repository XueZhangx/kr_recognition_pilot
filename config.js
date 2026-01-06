// config.js 
const EXPERIMENT_CONFIG = {

  restDuration: 10, 
  videoDuration: 180, // test -- 3 exp -- 180
  
  // 存储键名
  storageKey: 'visual_memory_exp_v1',
  

  videos: [
    {
      id: "Caterpillar",
      intactPath: "videos/intact/Caterpillar.mp4",
      disruptedPath: "videos/disrupted/Caterpillar_disrupted.mp4",
      
      // temporal问题按类别分组
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "bb1", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B2_2.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B3_1.png", 
              correct: "A" 
            },
            { 
              id: "bb2", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B5_1.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Boundary/Caterpillar_B3_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "bw1", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_B2_1.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_W3_1.png", 
              correct: "A" 
            },
            { 
              id: "bw2", 
              frameA: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_B5_2.png", 
              frameB: "stimuli/temporal/Caterpillar/Boundary-Within/Caterpillar_W3_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "ww1", 
              frameA: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_W4_1.png", 
              frameB: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_W4_2.png", 
              correct: "A" 
            },
            { 
              id: "ww2", 
              frameA: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_W6_2.png", 
              frameB: "stimuli/temporal/Caterpillar/Within-Within/Caterpillar_W6_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 3-AFC问题
      afcQuestions: [
        { 
          id: "a1", 
          question: "이 이야기에서 도움을 받고 있는 캐릭터는 누구입니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q1/bug2.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q1/caterpillar.png" },
            { id: "C", image: "stimuli/afc/Caterpillar/q1/bug1.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "a2", 
          question: "두 마리의 딱정벌레가 애벌레를 만났을 때, 애벌레는 무엇을 하고 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q2/squeezing.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q2/standing.png" },
            { id: "C", image: "stimuli/afc/Caterpillar/q2/pulling.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "a3", 
          question: "나비가 날아갔을 때, 두 마리의 딱정벌레는 무엇을 하고 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q3/position1.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q3/position2.png" },
            { id: "C", image: "stimuli/afc/Caterpillar/q3/position3.png" }
          ], 
          correct: "C" 
        }
      ]
    },
    {
      id: "Clocky",
      intactPath: "videos/intact/Clocky.mp4",
      disruptedPath: "videos/disrupted/Clocky_disrupted.mp4",
      
      // temporal问题按类别分组
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "bb1", 
              frameA: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B1_1.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B3_1.png", 
              correct: "A" 
            },
            { 
              id: "bb2", 
              frameA: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B7_2.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Boundary/Clocky_B3_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "bw1", 
              frameA: "stimuli/temporal/Clocky/Boundary-Within/Clocky_B1_2.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Within/Clocky_W8_1.png", 
              correct: "A" 
            },
            { 
              id: "bw2", 
              frameA: "stimuli/temporal/Clocky/Boundary-Within/Clocky_W8_2.png", 
              frameB: "stimuli/temporal/Clocky/Boundary-Within/Clocky_B7_1.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "ww1", 
              frameA: "stimuli/temporal/Clocky/Within-Within/Clocky_W4_1.png", 
              frameB: "stimuli/temporal/Clocky/Within-Within/Clocky_W4_2.png", 
              correct: "A" 
            },
            { 
              id: "ww2", 
              frameA: "stimuli/temporal/Clocky/Within-Within/Clocky_W10_2.png", 
              frameB: "stimuli/temporal/Clocky/Within-Within/Clocky_W10_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 3-AFC问题
      afcQuestions: [
        { 
          id: "a1", 
          question: "어떤 캐릭터의 부품이 떨어졌습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q2/clock.png" },
            { id: "B", image: "stimuli/afc/Clocky/q2/clock2.png" },
            { id: "C", image: "stimuli/afc/Clocky/q2/lamp.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "a2", 
          question: "떨어진 부품은 무엇입니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q1/pointer.png" },
            { id: "B", image: "stimuli/afc/Clocky/q1/spring.png" },
            { id: "C", image: "stimuli/afc/Clocky/q1/ring.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "a3", 
          question: "부품은 어디로 떨어졌습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q3/bed.png" },
            { id: "B", image: "stimuli/afc/Clocky/q3/floor.png" },
            { id: "C", image: "stimuli/afc/Clocky/q3/blanket.png" }
          ], 
          correct: "B" 
        }
      ]
    },
    {
      id: "Dustbunnies",
      intactPath: "videos/intact/Dustbunnies.mp4",
      disruptedPath: "videos/disrupted/Dustbunnies_disrupted.mp4",
      
      // temporal问题按类别分组
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "bb1", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B2_2.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B4_1.png", 
              correct: "A" 
            },
            { 
              id: "bb2", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B7_1.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Boundary/Dustbunnies_B4_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "bw1", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_B2_1.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_W8_1.png", 
              correct: "A" 
            },
            { 
              id: "bw2", 
              frameA: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_W8_2.png", 
              frameB: "stimuli/temporal/Dustbunnies/Boundary-Within/Dustbunnies_B7_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "ww1", 
              frameA: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W11_1.png", 
              frameB: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W11_2.png", 
              correct: "A" 
            },
            { 
              id: "ww2", 
              frameA: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W7_2.png", 
              frameB: "stimuli/temporal/Dustbunnies/Within-Within/Dustbunnies_W7_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 3-AFC问题
      afcQuestions: [
        { 
          id: "a1", 
          question: "청소기가 나타났을 때, 작은 토끼들은 어디에 모였습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q1/biscuit.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q1/machine.png" },
            { id: "C", image: "stimuli/afc/Dustbunnies/q1/chair.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "a2", 
          question: "누가 진공 청소기의 플러그를 뽑았습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q2/bunny2.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q2/cleaner.png" },
            { id: "C", image: "stimuli/afc/Dustbunnies/q2/bunny1.png" }
          ], 
          correct: "C" 
        },
        { 
          id: "a3", 
          question: "누가 진공 청소기 호스를 통해 청소기 안으로 들어갔습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q3/bunny1.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q3/bunnies.png" },
            { id: "C", image: "stimuli/afc/Dustbunnies/q3/cleaner.png" }
          ], 
          correct: "A" 
        }
      ]
    },
    {
      id: "Foxmouse",
      intactPath: "videos/intact/Foxmouse.mp4",
      disruptedPath: "videos/disrupted/Foxmouse_disrupted.mp4",
      
      // temporal问题按类别分组
      temporalCategories: [
        {
          name: "Boundary-Boundary",
          questions: [
            { 
              id: "bb1", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B2_1.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B4_1.png", 
              correct: "A" 
            },
            { 
              id: "bb2", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B5_2.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Boundary/Foxmouse_B4_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Boundary-Within",
          questions: [
            { 
              id: "bw1", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_W5_1.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_B5_1.png", 
              correct: "A" 
            },
            { 
              id: "bw2", 
              frameA: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_W5_2.png", 
              frameB: "stimuli/temporal/Foxmouse/Boundary-Within/Foxmouse_B2_2.png", 
              correct: "B" 
            }
          ]
        },
        {
          name: "Within-Within",
          questions: [
            { 
              id: "ww1", 
              frameA: "stimuli/temporal/Foxmouse/Within-Within/Foxmouse_W2_1.png", 
              frameB: "stimuli/temporal/Foxmouse/Within-Within/Foxmouse_W2_2.png", 
              correct: "A" 
            },
            { 
              id: "ww2", 
              frameA: "stimuli/temporal/Foxmouse/Within-Within/Foxmouse_W3_2.png", 
              frameB: "stimuli/temporal/Foxmouse/Within-Within/FoxmouseW3_1.png", 
              correct: "B" 
            }
          ]
        }
      ],
      
      // 3-AFC问题
      afcQuestions: [
        { 
          id: "a1", 
          question: "어떤 캐릭터 때문에 작은 쥐가 나뭇가지에서 떨어졌습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q1/blue_owl.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q1/red_owl.png" },
            { id: "C", image: "stimuli/afc/Foxmouse/q1/fox.png" }
          ], 
          correct: "C" 
        },
        { 
          id: "a2", 
          question: "여우가 나타났을 때, 두 마리의 부엉이는 무엇을 하고 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q2/flying.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q2/sleeping.png" },
            { id: "C", image: "stimuli/afc/Foxmouse/q2/staring.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "a3", 
          question: "부엉이들이 깨어나기 전에 작은 쥐는 어디에 있었습니까?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q3/snow.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q3/trunk.png" },
            { id: "C", image: "stimuli/afc/Foxmouse/q3/snow_start.png" }
          ], 
          correct: "C" 
        }
      ]
    }
  ],
  
  // Netlify表单配置
  netlifyForm: {
    name: "memory-task-pilot",
    honeypotField: "bot-field"
  },
  
  // 实验说明
  instructions: {
    consentTitle: "시각 기억 심리학 실험",
    consentText: "실험 참여 전에 다음 내용을 자세히 읽어주세요...",
    videoPhase: "동영상 시청 단계",
    testPhase: "테스트 단계"
  }
};

// 导出配置（如果需要模块化）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXPERIMENT_CONFIG;
}