import { Check } from 'phosphor-react';

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        What is your commitment?
      </label>

      <input
        type="text"
        id="title"
        placeholder="e.g. Exercises, sleep well, etc..."
        className="p-4 mt-3 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        What is the recurrence?
      </label>

      <button
        type="submit"
        className="font-semibold bg-green-600 mt-6 p-4 rounded-lg flex items-center justify-center gap-3 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirm
      </button>
    </form>
  );
}
