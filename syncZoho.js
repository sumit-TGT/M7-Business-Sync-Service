
// services/syncQuickBooks.js

/**
 * Sync receipt to QuickBooks (Mock Implementation)
 * Replace this logic with actual API integration.
 * @param {Object} receipt - Receipt data to sync
 * @returns {Object} Sync result
 */
module.exports = async (receipt) => {
  try {
    // ✅ Log for debugging
    console.log("🔁 Syncing to QuickBooks:", receipt);

    // ✅ Simulated response
    const response = {
      platform: 'quickbooks',
      synced: true,
      timestamp: new Date(),
      referenceId: receipt._id || null,
      message: 'Successfully synced with QuickBooks (mock)'
    };

    return response;

  } catch (error) {
    console.error("❌ QuickBooks sync failed:", error.message);
    throw new Error("QuickBooks sync failed: " + error.message);
  }
};
