import { convertToRaw } from 'draft-js';

class MentionGenerator {
  constructor(contentState) {
    this.contentState = contentState;
  }
  generate() {
    const contentRaw = convertToRaw(this.contentState);
    return this.processContent(contentRaw);
  }
  processContent(contentRaw) {
    const { blocks } = contentRaw;
    return blocks.map(block => {
      return block.text;
    }).join('\n');
  }
}

export default function exportContent(editorState) {
  const content = editorState.getCurrentContent();
  return new MentionGenerator(content).generate();
}
