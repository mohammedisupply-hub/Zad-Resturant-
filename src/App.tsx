/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Dashboard } from './components/Dashboard';
import { VoiceAssistant } from './components/VoiceAssistant';

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-24">
      <Dashboard />
      <VoiceAssistant />
    </div>
  );
}
