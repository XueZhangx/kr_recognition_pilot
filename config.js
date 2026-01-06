// config.js 
const EXPERIMENT_CONFIG = {

  restDuration: 10, 
  videoDuration: 3, // test -- 3
  
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
          question: "In this story, who is the character being helped?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q1/bug2.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q1/caterpillar.png" },
            { id: "C", image: "stimuli/afc/Caterpillar/q1/bug1.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "a2", 
          question: "When two beetles encounter the caterpillar, what is the caterpillar doing?", 
          options: [
            { id: "A", image: "stimuli/afc/Caterpillar/q2/squeezing.png" },
            { id: "B", image: "stimuli/afc/Caterpillar/q2/standing.png" },
            { id: "C", image: "stimuli/afc/Caterpillar/q2/pulling.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "a3", 
          question: "When the butterfly flew away, what were the two beetles doing?", 
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
          question: "In this video, What are the fallen component?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q1/pointer.png" },
            { id: "B", image: "stimuli/afc/Clocky/q1/spring.png" },
            { id: "C", image: "stimuli/afc/Clocky/q1/ring.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "a2", 
          question: "Which character's component has fallen off?", 
          options: [
            { id: "A", image: "stimuli/afc/Clocky/q2/clock.png" },
            { id: "B", image: "stimuli/afc/Clocky/q2/clock2.png" },
            { id: "C", image: "stimuli/afc/Clocky/q2/lamp.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "a3", 
          question: "Where did the components fall?", 
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
          question: "Where did the little rabbits gather when the cleaner showed up?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q1/biscuit.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q1/machine.png" },
            { id: "C", image: "stimuli/afc/Dustbunnies/q1/chair.png" }
          ], 
          correct: "A" 
        },
        { 
          id: "a2", 
          question: "Who unplugged the vacuum cleaner?", 
          options: [
            { id: "A", image: "stimuli/afc/Dustbunnies/q2/bunny2.png" },
            { id: "B", image: "stimuli/afc/Dustbunnies/q2/cleaner.png" },
            { id: "C", image: "stimuli/afc/Dustbunnies/q2/bunny1.png" }
          ], 
          correct: "C" 
        },
        { 
          id: "a3", 
          question: "Who get into the vacuum cleaner through the pipe?", 
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
          question: "Which character caused the little mouse to fall off the branch?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q1/blue_owl.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q1/red_owl.png" },
            { id: "C", image: "stimuli/afc/Foxmouse/q1/fox.png" }
          ], 
          correct: "C" 
        },
        { 
          id: "a2", 
          question: "What were the two owls doing when the fox appeared?", 
          options: [
            { id: "A", image: "stimuli/afc/Foxmouse/q2/flying.png" },
            { id: "B", image: "stimuli/afc/Foxmouse/q2/sleeping.png" },
            { id: "C", image: "stimuli/afc/Foxmouse/q2/staring.png" }
          ], 
          correct: "B" 
        },
        { 
          id: "a3", 
          question: "Where was the little mouse before the owls woke up?", 
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
    name: "visual-memory-experiment",
    honeypotField: "bot-field"
  },
  
  // 实验说明
  instructions: {
    consentTitle: "视觉记忆心理学实验",
    consentText: "在参与实验前，请仔细阅读以下内容...",
    videoPhase: "视频观看阶段",
    testPhase: "测试阶段"
  }
};

// 导出配置（如果需要模块化）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXPERIMENT_CONFIG;
}